import fs from 'node:fs';
import MarkdownIt from 'markdown-it';

const md = new MarkdownIt();

const obliviousText = fs.readFileSync('static/oblivious/Oblivious.md', {
	encoding: 'utf8'
});

const splitByBook = obliviousText.split(/.*# BOOK.*\r?\n/).slice(1);

const splitByBookAndChapter = splitByBook.map((bookString) =>
	bookString
		.split(/.*## Chapter.*\r?\n/)
		.map((chapter) => chapter.trim())
		.filter((chapter) => !!chapter)
);

const markdownChaptersByBook: string[][] = splitByBookAndChapter.map((book) =>
	book.map((chapterString) => md.render(chapterString.replace(/\n/g, '\n\n')))
);

/** Returns the number of chapters in each book, e.g. [29, 51, 24] */
export function getChapterCounts(): number[] {
	return markdownChaptersByBook.map((book) => book.length);
}

/** Returns rendered HTML for every chapter of the given book, or null if the book doesn't exist */
export function getBookContents(bookNumber: number): string[] | null {
	return markdownChaptersByBook[bookNumber - 1] ?? null;
}
