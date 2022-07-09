export const favouritesResolver = {
  Query: {
    favourites: async (_: any, args: any, { dataSources }: any) => {
      console.log(`in resolver token is`);
      console.log(dataSources.favouritesAPI.context.token);
      try {
        const res = await dataSources.favouritesAPI.getFavourites();
        return res;
      } catch (err) {
        console.error(err);
      }
    },
  },
  Mutation: {
    addBandToFavourites: async (
      _: any,
      { bandId }: any,
      { dataSources }: any
    ) => {
      try {
        const res = await dataSources.favouritesAPI.addBandToFavourites(bandId);
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    addTrackToFavourites: async (
      _: any,
      { trackId }: any,
      { dataSources }: any
    ) => {
      try {
        const res = await dataSources.favouritesAPI.addTrackToFavourites(
          trackId
        );
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    addGenreToFavourites: async (
      _: any,
      { genreId }: any,
      { dataSources }: any
    ) => {
      try {
        const res = await dataSources.favouritesAPI.addGenreToFavourites(
          genreId
        );
        return res;
      } catch (err) {
        console.error(err);
      }
    },
    addArtistToFavourites: async (
      _: any,
      { artistId }: any,
      { dataSources }: any
    ) => {
      try {
        const res = await dataSources.favouritesAPI.addArtistToFavourites(
          artistId
        );
        return res;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
