import { gql } from 'apollo-server';

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID!
    bandsIds: [ID]
    genresIds: [ID]
    artistsIds: [ID]
    tracksIds: [ID]
  }
  type Query {
    favourites: Favourites
  }
  type Mutation {
    addTrackToFavourites(userId: ID!, trackId: ID!): Favourites
    addBandToFavourites(userId: ID!, bandId: ID!): Favourites
    addGenreToFavourites(userId: ID!, genreId: ID!): Favourites
    addArtistToFavourites(userId: ID!, artistId: ID!): Favourites
  }
`;
