export const bandResolver = {
  Query: {
    band: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.bandAPI.getBandById(id);
      return res;
    },
    bands: async (_: any, __: any, { dataSources }: any) => {
      const res = await dataSources.bandAPI.getBands();
      return res;
    },
  },
  Mutation: {
    createBand: async (
      _: any,
      { name, origin, members, website, genres }: any,
      { dataSources }: any
    ) => {
      const res = await dataSources.bandAPI.createBand({
        name,
        origin,
        members,
        website,
        genres,
      });
      return res;
    },
    updateBand: async (
      _: any,
      { id, name, origin, members, website, genres }: any,
      { dataSources }: any
    ) => {
      const res = await dataSources.bandAPI.updateBand({
        id,
        name,
        origin,
        members,
        website,
        genres,
      });
      return res;
    },
    deleteBand: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.bandAPI.deleteBand({ id });
      return res;
    },
  },
};
