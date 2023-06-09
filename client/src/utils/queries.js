import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user {
    user {
      _id
      username
      email
      favorites
    }
  }
`;

export const QUERY_USERS = gql`
  query Query {
    users {
      _id
      username
      email
      password
      favorites
    }
  }
`;

export const QUERY_POSTS = gql`
  query Query {
    posts {
      _id
      postText
      postGamer {
        _id
        username
      }
      createdAt
    }
  }
`;

// export const QUERY_ME = gql`
//   query me {
//     me {
//       _id
//       username
//       email
//       thoughts {
//         _id
//         thoughtText
//         thoughtAuthor
//         createdAt
//       }
//     }
//   }
// `;
