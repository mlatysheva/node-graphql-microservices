import { Request, Response, RESTDataSource } from 'apollo-datasource-rest';

interface GenreInput {
  name?: string;
  description?: string;
  country?: string;
  year?: number;
}

export class GenreAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.genres_url;
  }

  willSendRequest(req: any) {
    req.headers.set('Authorization', this.context.token);
  }

  async getGenreById(id: string) {
    try {
      const res = await this.get(`/${id}`);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async getGenres() {
    try {
      const res = await this.get('/');
      return res.items;
    } catch (err) {
      console.error(err);
    }
  }

  async createGenre(genreData: GenreInput) {
    try {
      const res = await this.post('/', genreData);
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async updateGenre({ id, name, description, country, year }: any) {
    try {
      const res = await this.put(`/${id}`, {
        name,
        description,
        country,
        year,
      });
      return res;
    } catch (err) {
      console.error(err);
    }
  }

  async deleteGenre({ id }: any) {
    try {
      const res = await this.delete(`/${id}`);
      if (res.acknowledged === true) {
        console.log(`Genre with id ${id} deleted`);
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
