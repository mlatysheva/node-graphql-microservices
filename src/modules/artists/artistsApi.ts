import { RESTDataSource } from 'apollo-datasource-rest';

export class ArtistApi extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.artists_url;
  }

  async getAllArtists() {
    return this.get('/');
  }

  async getArtistById(id: any) {
    return this.get(`/${id}`);
  }
}
