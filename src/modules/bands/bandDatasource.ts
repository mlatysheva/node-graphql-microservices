import { Request, Response, RESTDataSource } from 'apollo-datasource-rest';

export class BandAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.bands_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
  }

  async getBandById(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async getBands() {
    try {
      const res = await this.get('/');
      return res.items;
    } catch (err) {
      console.error(err);
    }
  }

  async createBand({ name, origin, members, website, genres }: any) {
    try {
      const res = await this.post('/', {
        name,
        origin,
        members,
        website,
        genres,
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async updateBand({ id, name, origin, members, website, genres }: any) {
    try {
      const res = await this.put(`/${id}`, {
        name,
        origin,
        members,
        website,
        genres,
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  }
  async deleteBand({ id }: any) {
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
      console.log(`in didReceiveResponse data is `);
      console.dir(data);
      if (data.items) {
        for (const item of data.items) {
          item.id = item._id;
          console.log(`in didReceiveResponse item is `);
          console.dir(item);
        }
      }
    }
    return data;
  }
}
