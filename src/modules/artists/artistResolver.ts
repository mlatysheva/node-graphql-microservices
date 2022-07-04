import { ArtistInput } from './artistTypes';

export const artistResolver = {
  Query: {
    artist: async (_: any, { id }: any, { dataSources }: any) =>
      await dataSources.artistAPI.getArtistById(id),
    artists: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.artistAPI.getArtists(),
  },
  Mutation: {
    createArtist: async (
      _: any,
      {
        firstName,
        secondName,
        // middleName,
        // birthDate,
        // birthPlace,
        country,
        bandsIds,
        instruments,
      }: any,
      { dataSources }: any
    ) => {
      const res = await dataSources.artistAPI.createArtist({
        firstName,
        secondName,
        // middleName,
        // birthDate,
        // birthPlace,
        country,
        bandsIds,
        instruments,
      });
      return res;
    },
    updateArtist: async (
      _: any,
      {
        id,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bands,
        instruments,
      }: ArtistInput,
      { dataSources }: any
    ) => {
      const res = await dataSources.artistAPI.updateArtist({
        id,
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bands,
        instruments,
      });
      return res;
    },
  },
};
