import { RESTDataSource } from 'apollo-datasource-rest';
import { ArtistInput } from './artistTypes';
export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
  }

  async getArtistById(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async getArtists() {
    try {
      const res = await this.get('/');
      return res.items;
    } catch (err) {
      console.error(err);
    }
  }

  async createArtist(artistData: ArtistInput) {
    try {
      const res = await this.post('/', artistData);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async updateArtist({
    id,
    firstName,
    secondName,
    middleName,
    birthDate,
    birthPlace,
    country,
    bandsIds,
    instruments,
  }: any) {
    try {
      const res = await this.put(`/${id}`, {
        firstName,
        secondName,
        middleName,
        birthDate,
        birthPlace,
        country,
        bandsIds,
        instruments,
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteArtist({ id }: any) {
    try {
      const res = await this.delete(`/${id}`);
      if (res.acknowledged === true) {
        console.log(`Band with id ${id} deleted`);
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
