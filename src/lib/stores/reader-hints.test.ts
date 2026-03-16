import { describe, it, expect, beforeEach, vi } from 'vitest';
import { get } from 'svelte/store';

describe('reader-hints store', () => {
	beforeEach(() => {
		// Clear localStorage and module cache so each test gets fresh state
		localStorage.clear();
		vi.resetModules();
	});

	it('readerPosition defaults to null with empty localStorage', async () => {
		const { readerPosition } = await import('./reader-hints');
		expect(get(readerPosition)).toBeNull();
	});

	it('mostAdvancedReaderPosition defaults to null with empty localStorage', async () => {
		const { mostAdvancedReaderPosition } = await import('./reader-hints');
		expect(get(mostAdvancedReaderPosition)).toBeNull();
	});

	it('setting readerPosition updates localStorage', async () => {
		const { readerPosition } = await import('./reader-hints');
		readerPosition.set([2, 5, 3]);
		const stored = JSON.parse(String(localStorage.getItem('readerPosition')));
		expect(stored).toEqual([2, 5, 3]);
	});

	it('setting mostAdvancedReaderPosition updates localStorage', async () => {
		const { mostAdvancedReaderPosition } = await import('./reader-hints');
		mostAdvancedReaderPosition.set([1, 10, 7]);
		const stored = JSON.parse(String(localStorage.getItem('mostAdvancedReaderPosition')));
		expect(stored).toEqual([1, 10, 7]);
	});

	it('reads stored readerPosition from localStorage on init', async () => {
		localStorage.setItem('readerPosition', JSON.stringify([3, 12, 1]));
		const { readerPosition } = await import('./reader-hints');
		expect(get(readerPosition)).toEqual([3, 12, 1]);
	});

	it('reads stored mostAdvancedReaderPosition from localStorage on init', async () => {
		localStorage.setItem('mostAdvancedReaderPosition', JSON.stringify([2, 30, 5]));
		const { mostAdvancedReaderPosition } = await import('./reader-hints');
		expect(get(mostAdvancedReaderPosition)).toEqual([2, 30, 5]);
	});

	it('seeds mostAdvancedReaderPosition from readerPosition when only readerPosition is stored', async () => {
		localStorage.setItem('readerPosition', JSON.stringify([1, 5, 2]));
		// mostAdvancedReaderPosition not set in localStorage
		const { mostAdvancedReaderPosition } = await import('./reader-hints');
		expect(get(mostAdvancedReaderPosition)).toEqual([1, 5, 2]);
		// Also verifies it was persisted
		const stored = JSON.parse(String(localStorage.getItem('mostAdvancedReaderPosition')));
		expect(stored).toEqual([1, 5, 2]);
	});

	it('setting readerPosition to null clears stored value', async () => {
		localStorage.setItem('readerPosition', JSON.stringify([1, 1, 1]));
		const { readerPosition } = await import('./reader-hints');
		readerPosition.set(null);
		expect(JSON.parse(String(localStorage.getItem('readerPosition')))).toBeNull();
	});

	it('readerPosition and mostAdvancedReaderPosition are independent', async () => {
		const { readerPosition, mostAdvancedReaderPosition } = await import('./reader-hints');
		readerPosition.set([1, 1, 1]);
		mostAdvancedReaderPosition.set([3, 24, 10]);
		expect(get(readerPosition)).toEqual([1, 1, 1]);
		expect(get(mostAdvancedReaderPosition)).toEqual([3, 24, 10]);
	});
});
