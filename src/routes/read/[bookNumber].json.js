import {markdownChaptersByBook} from './_posts.js';

export function get(req, res, next) {
	// the `slug` parameter is available because
	// this file is called [slug].json.js
	const bookNumber = req.params.bookNumber
	const bookContents = markdownChaptersByBook[bookNumber - 1]
	
	if (bookContents) {
		res.writeHead(200, {
			'Content-Type': 'application/json'
		})

		res.end(JSON.stringify({
			bookContents: bookContents,
		}));
	} else {
		res.writeHead(404, {
			'Content-Type': 'application/json'
		});

		res.end(JSON.stringify({
			message: `Book doesn't exist`
		}));
	}
}
