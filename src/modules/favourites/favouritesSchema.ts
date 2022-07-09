import { gql } from 'apollo-server';

export const favouritesTypeDefs = gql`
  type Favourites {
    id: ID!
    userId: ID!
    bandsIds: [String]
    genresIds: [String]
    artistsIds: [String]
    tracksIds: [String]
  }
  type Query {
    favourites: Favourites
  }
  type Mutation {
    addTrackToFavourites(trackId: ID!): Favourites
    addBandToFavourites(bandId: ID!): Favourites
    addGenreToFavourites(genreId: ID!): Favourites
    addArtistToFavourites(artistId: ID!): Favourites
  }
`;
