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
    const res = await this.get(`/${id}`);
    // console.log(`artist is:`);
    // console.dir(res);
    return res;
  }

  async getArtists() {
    const res = await this.get('/');
    return res.items;
  }

  async createArtist({
    firstName,
    secondName,
    country,
    bandsIds,
    instruments,
  }: any) {
    const res = await this.post('/', {
      firstName,
      secondName,
      country,
      bandsIds,
      instruments,
    });
    return res;
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
