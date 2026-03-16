// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { load, entries } from './+page.server';
import { getChapterCounts } from '$lib/server/posts';

// Helper to call load with a slug param, casting to bypass SvelteKit's complex generic return type
function callLoad(slug: string) {
	return load({ params: { slug } } as Parameters<typeof load>[0]) as unknown as {
		content: string;
		book: number;
		chapter: number;
		nextChapterExists: boolean;
		totalChapters: number;
	};
}

describe('load', () => {
	it('returns content for book 1, chapter 1', () => {
		const result = callLoad('1/1');
		expect(result.book).toBe(1);
		expect(result.chapter).toBe(1);
		expect(result.content).toContain('<p>');
		expect(result.nextChapterExists).toBe(true);
		expect(result.totalChapters).toBe(29);
	});

	it('returns content for book 2, chapter 1', () => {
		const result = callLoad('2/1');
		expect(result.book).toBe(2);
		expect(result.chapter).toBe(1);
		expect(result.content).toContain('<p>');
		expect(result.totalChapters).toBe(51);
	});

	it('returns content for book 3, chapter 1', () => {
		const result = callLoad('3/1');
		expect(result.book).toBe(3);
		expect(result.chapter).toBe(1);
	});

	it('marks last chapter of book 1 as not having next chapter', () => {
		const result = callLoad('1/29');
		expect(result.book).toBe(1);
		expect(result.chapter).toBe(29);
		expect(result.nextChapterExists).toBe(false);
	});

	it('marks last chapter of book 2 as not having next chapter', () => {
		const result = callLoad('2/51');
		expect(result.nextChapterExists).toBe(false);
	});

	it('marks middle chapter as having next chapter', () => {
		const result = callLoad('1/15');
		expect(result.nextChapterExists).toBe(true);
	});

	it('throws 404 for book 0', () => {
		expect(() => callLoad('0/1')).toThrow();
		try {
			callLoad('0/1');
		} catch (e) {
			expect((e as { status: number }).status).toBe(404);
		}
	});

	it('throws 404 for book 4 (does not exist)', () => {
		expect(() => callLoad('4/1')).toThrow();
		try { callLoad('4/1'); } catch (e) { expect((e as { status: number }).status).toBe(404); }
	});

	it('throws 404 for chapter 0', () => {
		expect(() => callLoad('1/0')).toThrow();
		try { callLoad('1/0'); } catch (e) { expect((e as { status: number }).status).toBe(404); }
	});

	it('throws 404 for chapter beyond range', () => {
		expect(() => callLoad('1/999')).toThrow();
		try { callLoad('1/999'); } catch (e) { expect((e as { status: number }).status).toBe(404); }
	});

	it('throws 404 for non-numeric slug', () => {
		expect(() => callLoad('abc/def')).toThrow();
		try { callLoad('abc/def'); } catch (e) { expect((e as { status: number }).status).toBe(404); }
	});

	it('each chapter has different content', () => {
		const ch1 = callLoad('1/1').content;
		const ch2 = callLoad('1/2').content;
		expect(ch1).not.toBe(ch2);
	});
});

describe('entries', () => {
	const allEntries = entries() as { slug: string }[];
	const counts = getChapterCounts();
	const totalChapters = counts.reduce((sum, c) => sum + c, 0);

	it('returns the correct total number of entries', () => {
		expect(allEntries).toHaveLength(totalChapters);
	});

	it('every entry slug matches the pattern book/chapter', () => {
		for (const entry of allEntries) {
			expect(entry.slug).toMatch(/^\d+\/\d+$/);
		}
	});

	it('includes first and last chapters of each book', () => {
		const slugs = new Set(allEntries.map((e) => e.slug));
		counts.forEach((count, bookIdx) => {
			expect(slugs.has(`${bookIdx + 1}/1`)).toBe(true);
			expect(slugs.has(`${bookIdx + 1}/${count}`)).toBe(true);
		});
	});

	it('does not include invalid entries like book 0 or chapter 0', () => {
		const slugs = new Set(allEntries.map((e) => e.slug));
		expect(slugs.has('0/1')).toBe(false);
		expect(slugs.has('1/0')).toBe(false);
	});

	it('entries are ordered by book then chapter', () => {
		let prevBook = 0;
		let prevChapter = 0;
		for (const entry of allEntries) {
			const [b, c] = entry.slug.split('/').map(Number);
			if (b === prevBook) {
				expect(c).toBeGreaterThan(prevChapter);
			} else {
				expect(b).toBeGreaterThan(prevBook);
			}
			prevBook = b;
			prevChapter = c;
		}
	});
});
