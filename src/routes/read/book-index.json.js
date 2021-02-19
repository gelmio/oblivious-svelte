import markdownChaptersByBook from './_posts.js';

export function get(req, res, next) {
    const index = markdownChaptersByBook.map(book => book.length)
    
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })

    res.end(JSON.stringify(index));
}
