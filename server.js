const express = require('express');
const cors = require("cors");
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const { importSchema } = require('graphql-import');
const resolvers = require('./resolvers').resolvers;

// Put together a schema
const schema = makeExecutableSchema({
  typeDefs: importSchema('./schema.graphql'),
  resolvers,
});

// Initialize the app
const app = express();

// enable cors
app.use('*', cors());

// The GraphQL endpoint
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3001, () => {
  console.log('Go to http://localhost:3001/graphiql to run queries!');
});
