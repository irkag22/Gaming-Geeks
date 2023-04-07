import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      password
    }
  }
`;

export const QUERY_POSTS = gql`
  query Query {
    posts {
      _id
      postText
      postGamer
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
