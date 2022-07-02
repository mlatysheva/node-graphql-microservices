import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  async getArtistById(id: string) {
    const res = await this.get(`/${id}`);
    return res;
  }

  async getArtists() {
    const res = await this.get('/');
    return res.items;
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
