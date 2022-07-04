import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
    // console.log(`in willSenRequest artistDatasource context is:`);
    // console.dir(this.context);
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

  async createArtist({
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
      const res = await this.post('/', {
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
      console.dir(res);
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
