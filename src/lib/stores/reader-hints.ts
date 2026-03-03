import { writable } from 'svelte/store';

let storedPosition: [book: number, chapter: number, paragraph: number] | null = null;
let storedGiveScrollHint: boolean | null = null;

if (typeof window !== 'undefined') {
	storedPosition = JSON.parse(window.localStorage.getItem('readerPosition') ?? 'null') || null;
	storedGiveScrollHint = JSON.parse(window.localStorage.getItem('storedGiveScrollHint') ?? 'null') ?? true;
}

export const readerPosition = writable<[number, number, number] | null>(storedPosition);
export const giveScrollHint = writable<boolean | null>(storedGiveScrollHint);

readerPosition.subscribe((newPosition) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('readerPosition', JSON.stringify(newPosition));
	}
});

giveScrollHint.subscribe((newState) => {
	if (typeof window !== 'undefined') {
		window.localStorage.setItem('storedGiveScrollHint', JSON.stringify(newState));
	}
});
