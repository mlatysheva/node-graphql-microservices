import { gql } from 'apollo-server';

export const genreTypeDefs = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
  }

  type DeleteGenreResponse {
    acknowledged: Boolean
    deletedCount: Int
  }

  extend type Query {
    genre(id: ID!): Genre
    genres: [Genre]
  }

  extend type Mutation {
    createGenre(
      name: String
      description: String
      country: String
      year: Int
    ): Genre

    updateGenre(
      id: ID!
      name: String
      description: String
      country: String
      year: Int
    ): Genre

    deleteGenre(id: ID!): DeleteGenreResponse
  }
`;
