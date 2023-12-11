"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const book_entity_1 = require("./book.entity");
var Chance = require('chance');
var chance = new Chance();
const categorys = [
    'Fiction',
    'Biography',
    'Memoir',
    'Autobiography',
    'Action fiction',
    'Anthology',
    'Mystery',
    'Chapter book'
];
var url = 'http://localhost:3001/book';
async function main() {
    let res = await fetch(url);
    let data = await res.json();
    if (data.length != 0) {
        for (let i = 0; i < data.length; i++) {
            await fetch(url + '/' + data[i].book_id, { method: 'DELETE' });
        }
    }
    for (let i = 0; i < 10; i++) {
        const book = new book_entity_1.Book();
        book.name = chance.company();
        book.category = categorys[Math.floor(Math.random() * categorys.length)];
        book.author = chance.name();
        book.description = chance.sentence();
        await fetch(url, {
            body: JSON.stringify(book),
            headers: {
                'dataType': 'json',
                'content-type': 'application/json'
            },
            method: 'POST',
        });
    }
}
main();
//# sourceMappingURL=seed.js.map