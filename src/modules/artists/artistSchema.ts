import { gql } from 'apollo-server';

export const artistTypeDefs = gql`
  type Artist {
    id: ID!
    firstName: String
    secondName: String
    middleName: String
    birthDate: String
    birthPlace: String
    country: String
    bands: [ID]
    instruments: [String]
  }

  extend type Query {
    artist(id: ID!): Artist
    artists: [Artist]
  }

  extend type Mutation {
    createArtist(
      firstName: String!
      secondName: String
      country: String
      bandsIds: [String]
      instruments: [String]
    ): Artist
  }
`;
