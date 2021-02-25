import markdownChaptersByBook from './_posts.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const [bookNumber, chapterNumber] = req.params.slug.map(string => +string);
	const chapterContents = markdownChaptersByBook[bookNumber - 1][chapterNumber - 1]
	const nextChapterExists = chapterNumber < markdownChaptersByBook[bookNumber - 1].length

	if (chapterContents) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})

		res.end(JSON.stringify({
			chapter: chapterContents,
			nextChapterExists
		}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Chapter doesn't exist`
		}));
	}
}
