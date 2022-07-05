interface GenreInput {
  name?: string;
  description?: string;
  country?: string;
  year?: number;
}

interface UpdateGenreInput {
  id: string;
  genreData: GenreInput;
}

export const genreResolver = {
  Query: {
    genre: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.genreAPI.getGenreById(id);
      return res;
    },
    genres: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.genreAPI.getGenres();
      return res;
    },
  },
  Mutation: {
    createGenre: async (
      _: any,
      genreData: GenreInput,
      { dataSources }: any
    ) => {
      const res = await dataSources.genreAPI.createGenre(genreData);
      return res;
    },

    updateGenre: async (
      _: any,
      { id, name, description, country, year }: any,
      { dataSources }: any
    ) => {
      console.log('we are in resolver');
      const res = await dataSources.genreAPI.updateGenre({
        id,
        name,
        description,
        country,
        year,
      });
      return res;
    },

    deleteGenre: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.genreAPI.deleteGenre({ id });
      return res;
    },
  },
};
