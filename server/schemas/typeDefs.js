const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    posts: [Post]
    followers: [followers]
  }

  type Query {
    posts: [Post]
    followers: [followers]
    user(id: ID!): User
  }

`;

module.exports = typeDefs;
