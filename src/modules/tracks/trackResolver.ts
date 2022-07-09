import { TrackInput } from './trackDatasource';

export const trackResolver = {
  Query: {
    track: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.trackAPI.getTrack(id);
      return res;
    },
    tracks: async (_: any, { limit, offset }: any, { dataSources }: any) => {
      const res = await dataSources.trackAPI.getTracks(limit, offset);
      return res;
    },
  },
  Mutation: {
    createTrack: async (
      _: any,
      trackData: TrackInput,
      { dataSources }: any
    ) => {
      const res = await dataSources.trackAPI.createTrack(trackData);
      return res;
    },
    updateTrack: async (_: any, { id, input }: any, { dataSources }: any) => {
      console.log(`in updateTrack input is`);
      console.dir(input);
      const res = await dataSources.trackAPI.updateTrack(id, input);
      return res;
    },
    deleteTrack: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.trackAPI.deleteTrack(id);
      return res;
    },
  },
};
