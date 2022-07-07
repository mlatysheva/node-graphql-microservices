import { gql } from 'apollo-server';

export const bandTypeDefs = gql`
  type Member {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    instrument: String
    years: [String]
  }

  input MemberInput {
    artist: ID!
    instrument: String
    years: [String]
  }

  type Band {
    id: ID!
    name: String
    origin: String
    members: [String]
    website: String
    genresIds: [String]
  }

  type DeleteBandResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  extend type Query {
    band(id: ID!): Band
    bands: [Band]
  }

  extend type Mutation {
    createBand(
      name: String!
      origin: String
      members: [String]
      website: String
      genresIds: [String]
    ): Band

    updateBand(
      id: ID!
      name: String
      origin: String
      members: [String]
      website: String
      genresIds: [String]
    ): Band

    deleteBand(id: ID!): DeleteBandResponse
  }
`;
