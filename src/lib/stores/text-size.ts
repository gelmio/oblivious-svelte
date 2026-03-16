import { writable } from 'svelte/store';

/**
 * Available prose size classes from smallest to largest.
 * Index 1 (prose-base) is the default.
 */
export const PROSE_SIZES = ['prose-sm', 'prose-base', 'prose-lg', 'prose-xl', 'prose-2xl'] as const;

const DEFAULT_INDEX = 1; // prose-base

let storedIndex: number = DEFAULT_INDEX;

if (globalThis.window !== undefined) {
	const raw = globalThis.localStorage.getItem('textSizeIndex');
	if (raw !== null) {
		const parsed = Number.parseInt(raw, 10);
		if (!Number.isNaN(parsed) && parsed >= 0 && parsed < PROSE_SIZES.length) {
			storedIndex = parsed;
		}
	}
}

export const textSizeIndex = writable<number>(storedIndex);

textSizeIndex.subscribe((newIndex) => {
	if (globalThis.window !== undefined) {
		globalThis.localStorage.setItem('textSizeIndex', JSON.stringify(newIndex));
	}
});
