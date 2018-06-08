var casual = require('casual');

// 
// Let's create just some fake data
//
let books = [
  {
    id: 1,
    title: casual.title,
    author: null,
  },
  {
    id: 2,
    title: casual.title,
    author: null,
  },
];

let authors = [
  {
    id: 1,
    name: casual.name,
    age: casual.integer(0, 120),
  },
  {
    id: 2,
    name: casual.name,
    age: casual.integer(0, 120),
  },
];

books = books.map(book => {
  return {
    ...book,
    author: authors[0].id
  }
});

exports.data = {
  books,
  authors,
  lastAuthorId: authors.length + 1
}
