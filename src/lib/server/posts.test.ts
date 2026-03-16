// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { getChapterCounts, getBookContents } from './posts';

describe('getChapterCounts', () => {
	const counts = getChapterCounts();

	it('returns exactly 3 books', () => {
		expect(counts).toHaveLength(3);
	});

	it('each count is a positive integer', () => {
		for (const count of counts) {
			expect(count).toBeGreaterThan(0);
			expect(Number.isInteger(count)).toBe(true);
		}
	});

	it('returns the expected chapter counts [29, 51, 24]', () => {
		expect(counts).toEqual([29, 51, 24]);
	});
});

describe('getBookContents', () => {
	const counts = getChapterCounts();

	it('returns an array of HTML strings for each valid book', () => {
		for (let book = 1; book <= 3; book++) {
			const contents = getBookContents(book);
			expect(contents).not.toBeNull();
			expect(Array.isArray(contents)).toBe(true);
			expect(contents).toHaveLength(counts[book - 1]);
		}
	});

	it('every chapter contains rendered HTML with <p> tags', () => {
		for (let book = 1; book <= 3; book++) {
			const contents = getBookContents(book);
			if (!contents) { expect.unreachable('book should exist'); return; }
			for (const chapter of contents) {
				expect(chapter).toContain('<p>');
				expect(chapter.length).toBeGreaterThan(0);
			}
		}
	});

	it('chapters do not contain raw markdown headings', () => {
		for (let book = 1; book <= 3; book++) {
			const contents = getBookContents(book);
			if (!contents) { expect.unreachable('book should exist'); return; }
			for (const chapter of contents) {
				expect(chapter).not.toMatch(/^## Chapter/m);
				expect(chapter).not.toMatch(/^# BOOK/m);
			}
		}
	});

	it('returns null for book 0', () => {
		expect(getBookContents(0)).toBeNull();
	});

	it('returns null for book 4 (out of range)', () => {
		expect(getBookContents(4)).toBeNull();
	});

	it('returns null for negative book number', () => {
		expect(getBookContents(-1)).toBeNull();
	});

	it('book 1 chapter 1 contains substantive content', () => {
		const contents = getBookContents(1);
		if (!contents) { expect.unreachable('book 1 should exist'); return; }
		// First chapter should have a meaningful amount of text
		expect(contents[0].length).toBeGreaterThan(100);
	});
});
