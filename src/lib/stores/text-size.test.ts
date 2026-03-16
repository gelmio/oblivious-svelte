import { describe, it, expect, beforeEach, vi } from 'vitest';
import { get } from 'svelte/store';

describe('text-size store', () => {
	beforeEach(() => {
		localStorage.clear();
		vi.resetModules();
	});

	it('PROSE_SIZES contains 5 entries from prose-sm to prose-2xl', async () => {
		const { PROSE_SIZES } = await import('./text-size');
		expect(PROSE_SIZES).toHaveLength(5);
		expect(PROSE_SIZES[0]).toBe('prose-sm');
		expect(PROSE_SIZES[1]).toBe('prose-base');
		expect(PROSE_SIZES[2]).toBe('prose-lg');
		expect(PROSE_SIZES[3]).toBe('prose-xl');
		expect(PROSE_SIZES[4]).toBe('prose-2xl');
	});

	it('defaults to index 1 (prose-base) with no localStorage', async () => {
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(1);
	});

	it('reads stored index from localStorage on init', async () => {
		localStorage.setItem('textSizeIndex', '3');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(3);
	});

	it('setting textSizeIndex updates localStorage', async () => {
		const { textSizeIndex } = await import('./text-size');
		textSizeIndex.set(4);
		expect(JSON.parse(String(localStorage.getItem('textSizeIndex')))).toBe(4);
	});

	it('falls back to default for NaN in localStorage', async () => {
		localStorage.setItem('textSizeIndex', 'not-a-number');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(1);
	});

	it('falls back to default for out-of-range negative value', async () => {
		localStorage.setItem('textSizeIndex', '-1');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(1);
	});

	it('falls back to default for out-of-range positive value', async () => {
		localStorage.setItem('textSizeIndex', '99');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(1);
	});

	it('accepts boundary index 0', async () => {
		localStorage.setItem('textSizeIndex', '0');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(0);
	});

	it('accepts boundary index 4 (last valid)', async () => {
		localStorage.setItem('textSizeIndex', '4');
		const { textSizeIndex } = await import('./text-size');
		expect(get(textSizeIndex)).toBe(4);
	});
});
