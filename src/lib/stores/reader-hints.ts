import { writable } from 'svelte/store';

type Position = [book: number, chapter: number, paragraph: number];

let storedPosition: Position | null = null;
let storedAdvanced: Position | null = null;

if (typeof window !== 'undefined') {
	storedPosition = JSON.parse(window.localStorage.getItem('readerPosition') ?? 'null') || null;
	storedAdvanced =
		JSON.parse(window.localStorage.getItem('mostAdvancedReaderPosition') ?? 'null') || null;

	// Migration: seed mostAdvancedReaderPosition from readerPosition for existing users
	if (!storedAdvanced && storedPosition) {
		storedAdvanced = storedPosition;
		window.localStorage.setItem('mostAdvancedReaderPosition', JSON.stringify(storedAdvanced));
	}
}

export const readerPosition = writable<Position | null>(storedPosition);

readerPosition.subscribe((newPosition) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('readerPosition', JSON.stringify(newPosition));
	}
});

export const mostAdvancedReaderPosition = writable<Position | null>(storedAdvanced);

mostAdvancedReaderPosition.subscribe((newPosition) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('mostAdvancedReaderPosition', JSON.stringify(newPosition));
	}
});
