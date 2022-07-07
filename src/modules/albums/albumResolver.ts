import { AlbumInput } from './albumTypes';

export { AlbumInput } from './albumTypes';

export const albumResolver = {
  Query: {
    album: async (_: any, { id }: any, { dataSources }: any) =>
      await dataSources.albumAPI.getAlbumById(id),
    albums: async (_: any, __: any, { dataSources }: any) =>
      await dataSources.albumAPI.getAlbums(),
  },
  Mutation: {
    createAlbum: async (
      _: any,
      albumData: AlbumInput,
      { dataSources }: any
    ) => {
      const res = await dataSources.albumAPI.createAlbum(albumData);
      return res;
    },
    updateAlbum: async (
      _: any,
      // { id, name, released, artistsIds, bandsIds, genresIds, image }: any,
      { id, input }: any,
      { dataSources }: any
    ) => {
      const { name, released, artistsIds, bandsIds, genresIds, image } = input;
      const res = await dataSources.albumAPI.updateAlbum({
        id,
        name,
        released,
        artistsIds,
        bandsIds,
        genresIds,
        image,
      });
      return res;
    },
    deleteAlbum: async (_: any, { id }: any, { dataSources }: any) => {
      const res = await dataSources.albumAPI.deleteAlbum({ id });
      return res;
    },
  },
};
