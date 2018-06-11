// Some fake data
let books = require('./mockData').data.books;
let authors = require('./mockData').data.authors;

exports.resolvers = {
  Query: {
    books: () => books.map(book => ({
      ...book,
      author: authors.find(author => book.author === author.id)
    }))
  },
};
