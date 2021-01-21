const { ApolloServer } = require('apollo-server')

const {
  GraphQLDate,
  GraphQLTime,
  GraphQLDateTime,
} = require('graphql-iso-date')

const server = new ApolloServer({
  typeDefs: require('./schema'),
  resolvers: {
    JSON: require('graphql-type-json'),
    GraphQLDate,
    GraphQLTime,
    GraphQLDateTime,

    Query: require('./queries'),
    Mutation: require('./mutations'),
    ...require('./types'),
  },
  mocks: require('./mocks'),
  mockEntireSchema: true
})

server
  .listen(process.env.PORT || 5000)
  .then(({ url }) => console.log(`🚀 Server is running on ${url}`))