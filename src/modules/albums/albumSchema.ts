import { gql } from 'apollo-server';

export const albumTypeDefs = gql`
  type Album {
    id: ID!
    name: String
    released: Int
    artistsIds: [String]
    bandsIds: [String]
    trackIds: [String]
    genresIds: [String]
    image: String
  }

  extend type Query {
    album(id: ID!): Album
    albums: [Album]
  }

  extend type Mutation {
    createAlbum(name: String!, released: Int): Album
  }
`;
