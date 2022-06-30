import { gql } from 'apollo-server';

export const bandTypeDefs = gql`
  type Band {
    id: ID!
    name: String
    origin: String
    members: [Member]
    website: String
    genres: String
  }

  type Query {
    bands(id: ID!): Band
    bands: [Band]
  }

  type Mutation {
    createBand(
      name: String!
      origin: String!
      website: String!
      genres: String!
    ): Band
    updateBand(
      id: ID!
      name: String!
      origin: String!
      website: String!
      genres: String!
    ): Band
    deleteBand(id: ID!): Band
  }
`;
