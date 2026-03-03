import { error } from '@sveltejs/kit';
import { getBookContents, getChapterCounts } from '$lib/server/posts';
import type { PageServerLoad, EntryGenerator } from './$types';

export const load: PageServerLoad = ({ params }) => {
	const parts = params.slug.split('/');
	const bookNumber = +parts[0];
	const chapterNumber = +parts[1];

	if (!bookNumber || !chapterNumber) {
		error(404, 'Invalid book/chapter');
	}

	const bookContents = getBookContents(bookNumber);

	if (!bookContents) {
		error(404, "Book doesn't exist");
	}

	if (chapterNumber < 1 || chapterNumber > bookContents.length) {
		error(404, "Chapter doesn't exist");
	}

	const nextChapterExists = chapterNumber < bookContents.length;

	return {
		content: bookContents[chapterNumber - 1],
		book: bookNumber,
		chapter: chapterNumber,
		nextChapterExists
	};
};

export const entries: EntryGenerator = () => {
	const chapterCounts = getChapterCounts();
	const entries: { slug: string }[] = [];

	chapterCounts.forEach((count, bookIndex) => {
		for (let ch = 1; ch <= count; ch++) {
			entries.push({ slug: `${bookIndex + 1}/${ch}` });
		}
	});

	return entries;
};
