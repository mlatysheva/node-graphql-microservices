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
    instruments: String
  }

  type Query {
    artist(id: ID!): Artist
    artists: [Artist]
  }
`;
