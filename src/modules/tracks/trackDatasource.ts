import { RESTDataSource } from 'apollo-datasource-rest';

export interface TrackInput {
  title: string;
  albumId: string;
  artistsIds: string[];
  bandsIds: string[];
  duration: number;
  released: number;
  genresIds: string[];
}

export class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.tracks_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
    console.log('in willSendRequest req.body is');
    console.dir(req.body);
  }

  async getTrack(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async getTracks(limit: number, offset: number) {
    try {
      const res = await this.get(`?limit=${limit}&offset=${offset}`);
      return res.items;
    } catch (err) {
      console.error(err);
    }
  }

  async createTrack(trackData: any) {
    try {
      return await this.post('/', trackData.input);
    } catch (err) {
      console.error(err);
    }
  }

  async updateTrack(id: string, input: any) {
    try {
      console.log(`in updateTrack Datasource input is`);
      console.dir(input);
      const res = await this.put(`/${id}`, input);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteTrack(id: string) {
    try {
      const res = await this.delete(`/${id}`);
      if (res.acknowledged === true) {
        console.log(`Track with id ${id} deleted`);
      }
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async didReceiveResponse(res: Response, req: Request) {
    const data = await res.json();
    console.log('in didReceiveResponse data is');
    console.dir(data);
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
