import { gql } from 'apollo-server';

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID!
    bands: [ID]
    genres: [ID]
    artists: [ID]
    tracks: [ID]
  }
  type Query {
    favourites(userId: ID!): Favourites
  }
  type Mutation {
    addTrackToFavourites(userId: ID!, trackId: ID!): Favourites
    addBandToFavourites(userId: ID!, bandId: ID!): Favourites
    addGenreToFavourites(userId: ID!, genreId: ID!): Favourites
    addArtistToFavourites(userId: ID!, artistId: ID!): Favourites
  }
`;
