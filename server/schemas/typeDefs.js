const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    posts: [Post]!
  }

  type Post {
    _id: ID
    postText: String
    postGamer: User
    createdAt: String


  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    posts(username: String): [Post]
    post(postId: ID!): Post
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPost(postText: String!): Post
    removePost(postId: ID!): Post
    updatePost(postId: ID!, postText: String!): Post
  }
`;

module.exports = typeDefs;
