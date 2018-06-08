// Some fake data
let authors = require('./mockData').data.authors;
let books = require('./mockData').data.books;

exports.resolvers = {
  Query: {
    authors: () => authors.map(author => ({
      ...author,
      books: books.filter(book => book.author === author.id)
    }))
  },
  Mutation: {
    addAuthor(_, { name, age }) {
      const newAuthor = {
        name,
        age,
        id: ++lastId
      }
      authors = authors.concat(newAuthor);
      return newAuthor;
    },
  },
};
