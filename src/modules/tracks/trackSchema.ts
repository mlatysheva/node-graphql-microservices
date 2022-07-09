import { gql } from 'apollo-server';

export const trackTypeDefs = gql`
  type Track {
    id: ID!
    title: String
    albumId: String
    bandsIds: [String]
    artistsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  input TrackInput {
    title: String
    albumId: String
    artistsIds: [String]
    bandsIds: [String]
    duration: Int
    released: Int
    genresIds: [String]
  }

  type DeleteTrackResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  extend type Query {
    track(id: ID!): Track
    tracks(limit: Int, offset: Int): [Track]
  }

  extend type Mutation {
    createTrack(input: TrackInput): Track
    updateTrack(id: ID!, input: TrackInput): Track
    deleteTrack(id: ID!): DeleteTrackResponse
  }
`;
