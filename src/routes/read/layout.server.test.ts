// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { load } from './+layout.server';
import { getChapterCounts } from '$lib/server/posts';

// Helper cast to bypass SvelteKit's complex generic return type
function callLoad() {
	return load({} as Parameters<typeof load>[0]) as unknown as { chapterCounts: number[] };
}

describe('read layout load', () => {
	it('returns chapterCounts matching getChapterCounts()', () => {
		const result = callLoad();
		expect(result.chapterCounts).toEqual(getChapterCounts());
	});

	it('chapterCounts is an array of 3 positive numbers', () => {
		const result = callLoad();
		expect(result.chapterCounts).toHaveLength(3);
		for (const count of result.chapterCounts) {
			expect(count).toBeGreaterThan(0);
		}
	});
});
