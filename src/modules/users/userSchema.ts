import { gql } from 'apollo-server';

export const userTypeDefs = gql`
  type User {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    password: String!
    email: String!
  }

  type Query {
    user(id: ID!): User
    users: [User]
    jwt(email: String!, password: String!): String
  }

  type Mutation {
    register(
      firstName: String
      secondName: String
      password: String
      email: String
      favouriteArtistIds: [ID]
    ): User
  }
`;
