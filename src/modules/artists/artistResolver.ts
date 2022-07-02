export const artistResolver = {
  Query: {
    artist: (_: any, { id }: any, { dataSources }: any) =>
      dataSources.artistAPI.getArtistById(id),
    artists: (_: any, __: any, { dataSources }: any) =>
      dataSources.artistAPI.getArtists(),
  },
};
