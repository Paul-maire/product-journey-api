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
    Subscription: require('./subscriptions'),
    ...require('./types'),
  },
  mocks: require('./mocks'),
  mockEntireSchema: true,
  plugins: [require('./plugins')]
})

server
  .listen(process.env.PORT || 5000)
  .then(({ url, subscriptionsUrl }) => console.log(`🚀 Server is running on ${url} \n 📣 Subscription is running on ${subscriptionsUrl}`))