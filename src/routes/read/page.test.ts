import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, cleanup } from '@testing-library/svelte';
import { tick } from 'svelte';

// Mock $app/navigation
const mockGoto = vi.fn();
vi.mock('$app/navigation', () => ({
	goto: (...args: unknown[]) => mockGoto(...args)
}));

// Mock the reader-hints store so we can control readerPosition per test
const { mockReaderPosition } = vi.hoisted(() => {
	let value: [number, number, number] | null = null;
	const subs = new Set<(v: typeof value) => void>();
	const store = {
		subscribe(fn: (v: typeof value) => void) {
			subs.add(fn);
			fn(value);
			return () => subs.delete(fn);
		},
		set(v: typeof value) {
			value = v;
			subs.forEach((fn) => fn(v));
		}
	};
	return { mockReaderPosition: store };
});
vi.mock('$lib/stores/reader-hints', () => ({
	readerPosition: mockReaderPosition,
	mostAdvancedReaderPosition: mockReaderPosition
}));

import Page from './+page.svelte';

describe('read landing page (+page.svelte)', () => {
	beforeEach(() => {
		cleanup();
		mockGoto.mockClear();
		mockReaderPosition.set(null);
	});

	it('redirects to /read/1/1/ when no saved position', async () => {
		render(Page);
		await tick();
		await vi.waitFor(() => {
			expect(mockGoto).toHaveBeenCalledWith('/read/1/1/', { replaceState: true });
		});
	});

	it('redirects to saved position when readerPosition exists', async () => {
		mockReaderPosition.set([2, 5, 3]);
		render(Page);
		await tick();
		await vi.waitFor(() => {
			expect(mockGoto).toHaveBeenCalledWith('/read/2/5/', { replaceState: true });
		});
	});

	it('renders a spinner while redirecting', () => {
		const { container } = render(Page);
		// The spinner component renders a div with class "circle"
		const spinner = container.querySelector('.circle');
		expect(spinner).toBeTruthy();
	});
});
