import { Request, Response, RESTDataSource } from 'apollo-datasource-rest';
import { ArtistAPI } from '../artists/artistDatasource';

export class AlbumAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.albums_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
  }

  async getAlbumById(id: string) {
    try {
      const res = await this.get(`/${id}`);
      // if (res.artistsIds.length > 0) {
      //   const artistAPI = new ArtistAPI();
      //   for (let i = 0; i < res.artistsIds.length; i++) {
      //     res.artists[i] = await artistAPI.getArtistById(res.artistsIds[i]);
      //   }
      // }
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async getAlbums() {
    try {
      const res = await this.get('/');
      return res.items;
    } catch (err) {
      console.error(err);
    }
  }

  async createAlbum(albumData: any) {
    try {
      const res = await this.post('/', albumData.input);
      // if (res.artistsIds.length > 0) {
      //   const artistAPI = new ArtistAPI();
      //   for (let i = 0; i < res.artistsIds.length; i++) {
      //     res.artists[i] = await artistAPI.getArtistById(res.artistsIds[i]);
      //   }
      // }
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async updateAlbum({
    id,
    name,
    released,
    artistsIds,
    bandsIds,
    genresIds,
    image,
  }: any) {
    try {
      const res = await this.put(`/${id}`, {
        name,
        released,
        artistsIds,
        bandsIds,
        genresIds,
        image,
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteAlbum({ id }: any) {
    try {
      const res = await this.delete(`/${id}`);
      if (res.acknowledged === true) {
        console.log(`Album with id ${id} deleted`);
      }
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async didReceiveResponse(res: Response, req: Request) {
    const data = await res.json();
    if (res.ok) {
      data.id = data._id;
      if (data.items) {
        for (const item of data.items) {
          item.id = item._id;
        }
      }
    }
    return data;
  }
}
