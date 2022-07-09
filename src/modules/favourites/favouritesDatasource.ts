import { Request, Response, RESTDataSource } from 'apollo-datasource-rest';

export class FavouritesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.favourites_url;
  }
  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
  }

  async getFavourites() {
    try {
      const res = await this.get('/');
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async addBandToFavourites(id: any) {
    try {
      const res = await this.put('/add', { type: 'bands', id });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async addTrackToFavourites(id: any) {
    try {
      const res = await this.put('/add', { type: 'tracks', id });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async addArtistToFavourites(id: any) {
    try {
      const res = await this.put('/add', { type: 'artists', id });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async addGenreToFavourites(id: any) {
    try {
      const res = await this.put('/add', { type: 'genres', id });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async didReceiveResponse(res: Response, req: Request) {
    console.log(`in didReceiveResponse res is:`);
    console.dir(res);
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
