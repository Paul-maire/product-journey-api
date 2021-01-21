const { gql } = require('apollo-server')

module.exports = gql`
  scalar JSON
  scalar GraphQLDate
  scalar GraphQLTime
  scalar GraphQLDateTime

  type Query {
    ideas: [Idea!]!
    idea(id: Int): Idea!
  }

  type Mutation {
    saveIdea(idea: IdeaInput!): Idea
  }

  type Idea {
    id: Int!

    title: String!
    content: String!
  }
  input IdeaInput {
    id: Int

    title: String
    content: String
  }
`