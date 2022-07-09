import { gql } from 'apollo-server';

export const albumTypeDefs = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    genresIds: [String]
    image: String
  }

  input AlbumInput {
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    genresIds: [String]
    image: String
  }

  type DeleteAlbumResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  extend type Query {
    album(id: ID!): Album
    albums: [Album]
  }

  extend type Mutation {
    createAlbum(input: AlbumInput): Album
    updateAlbum(id: ID!, input: AlbumInput): Album
    deleteAlbum(id: ID!): DeleteAlbumResponse
  }
`;
