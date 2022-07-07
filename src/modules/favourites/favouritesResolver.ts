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
      { type, id }: any,
      { dataSources }: any
    ) => {
      console.log(type, id);
      console.log(dataSources.favouritesAPI.context.token);
      try {
        const res = await dataSources.favouritesAPI.addToFavourites({
          type,
          id,
        });
        return res;
      } catch (err) {
        console.error(err);
      }
    },
  },
};
