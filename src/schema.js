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
    saveIdea(idea: IdeaInput): Idea
  }

  type Idea {
    id: Int!

    title: String!
    content: String!

    vote: Boolean
    votes: [Vote!]!
    votes_count: Int!

    comments: [Comment!]!
  }
  input IdeaInput {
    id: Int

    title: String
    content: String
  }

  type Vote {
    id: Int!

    idea_id: Int!
  }
  input VoteInput {
    id: Int

    idea_id: Int
  }

  type Comment {
    id: Int!

    content: String!
  }
  input CommentInput {
    id: Int

    content: String
  }
`