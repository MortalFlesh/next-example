// @flow
require('babel-register');
const { GraphQLServer } = require('graphql-yoga');
const { Prisma } = require('prisma-binding');
const resolvers = require('./resolvers');

const server = new GraphQLServer({
  typeDefs: 'model.graphql',
  resolvers,
  context: req => ({
    ...req,
    db: new Prisma({
      typeDefs: 'database/schema.graphql',
      endpoint: process.env.PRISMA_ENDPOINT, // the endpoint of the Prisma DB service (value is set in .env)
      secret: process.env.PRISMA_SECRET, // taken from database/prisma.yml (value is set in .env)
      debug: true, // log all GraphQL queries & mutations
    }),
  }),
});

server.start(() => console.log('Server is running on http://localhost:4000'));
