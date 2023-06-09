import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!, $favorites: String!) {
    addUser(username: $username, email: $email, password: $password, favorites: $favorites) {
      token
      user {
        _id
        username
        favorites
      }
    }
  }
`;

export const ADD_POST = gql`
mutation Mutation($postText: String!) {
  addPost(postText: $postText) {
    _id
    postText
    postGamer {
      _id
      username
    }
    createdAt
  }
}`;

export const REMOVE_POST = gql`
mutation Mutation($postId: ID!) {
  removePost(postId: $postId) {
    _id
    postGamer {
      _id
      username
    }
    postText
    createdAt
  }
}`;

export const UPDATE_POST = gql`
mutation UpdatePost($postId: ID!, $postText: String!) {
  updatePost(postId: $postId, postText: $postText) {
    _id
    postGamer {
      _id
      username
    }
    postText 
    createdAt
  }
}`


export const UPDATE_USER = gql`
mutation updateUser($favorites: String!) {
  updateUser(favorites: $favorites) {
    _id
    favorites
  }
}`