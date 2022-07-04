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
      { firstName, secondName, country, bandsIds, instruments }: any,
      { dataSources }: any
    ) => {
      const res = await dataSources.artistAPI.createArtist({
        firstName,
        secondName,
        country,
        bandsIds,
        instruments,
      });
      return res;
    },
  },
};
