import { gql } from 'apollo-server';

export const genreTypeDefs = gql`
  type Genre {
    id: ID!
    name: String
    description: String
    country: String
    year: Int
    subGenres: [Genre]
  }

  type Query {
    genre(id: ID!): Genre
    genres(limit: Int, offset: Int): [Genre]
  }

  type Mutation {
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

    deleteGenre(id: ID!): Genre
  }
`;
