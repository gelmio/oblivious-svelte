// Ordinarily, you'd generate this data from markdown files in your
// repo, or fetch them from a database of some kind. But in order to
// avoid unnecessary dependencies in the starter template, and in the
// service of obviousness, we're just going to leave it here.

// This file is called `_posts.js` rather than `posts.js`, because
// we don't want to create an `/blog/posts` route — the leading
// underscore tells Sapper not to do that.

const fs = require('fs');
const md = require('markdown-it')();

const obliviousText = fs.readFileSync(`./static/oblivious/Oblivious.md`, {
encoding: 'utf8'
});

const splitByBook = obliviousText.split(/.*# BOOK.*\r\n/).slice(1)

const splitByBookAndChapter = splitByBook.map(
	bookString => bookString.split(/.*## Chapter.*\r\n/)
		.map(chapter => chapter.trim())
		.filter(chapter => !!chapter)
)

export const markdownChaptersByBook = splitByBookAndChapter.map(
	book => book.map(
		chapterString => md.render(chapterString.replace(/\n/g, "\n\n"))
	)
)

export const snippets = splitByBookAndChapter.map(
	book => book.map(chapterString => chapterString.replace(/.*\[\].*/, "").trim().slice(0, 160))
)

export default markdownChaptersByBook;
