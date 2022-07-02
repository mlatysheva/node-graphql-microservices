import { gql } from 'apollo-server';

export interface User {
  _id: string;
  firstName: string;
  lastName: string;
  password: string;
  email: string;
}

export interface UserInput {
  firstName: string;
  lastName: string;
  password: string;
  email: string;
  favouriteArtistIds: [string];
}

export const userTypeDefs = gql`
  type User {
    id: ID!
    firstName: String
    lastName: String
    password: String!
    email: String!
  }

  extend type Query {
    user(id: ID!): User
    jwt(email: String!, password: String!): String
  }

  extend type Mutation {
    register(
      firstName: String
      lastName: String
      password: String
      email: String
      favouriteArtistIds: [ID]
    ): User
  }
`;
