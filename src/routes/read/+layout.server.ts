import { getChapterCounts } from '$lib/server/posts';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => {
	return {
		chapterCounts: getChapterCounts()
	};
};
