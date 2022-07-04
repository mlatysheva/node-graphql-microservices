import { Request, Response, RESTDataSource } from 'apollo-datasource-rest';
import { UserInput } from './userSchema';

export class UserAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = process.env.users_url;
  }
  willSendRequest(req: any) {
    // req.headers.set('Authorization', `Bearer ${process.env.JWT_SECRET}`);
    // req.headers.set('jwt', this.context.token);
    req.headers.set('Authorization', this.context.token);
  }

  async registerUser(data: UserInput) {
    const response = await this.post('/register', data);
    response.id = response._id;
    console.dir(response);
    return response;
  }

  async getUserById(id: string) {
    console.log(`in getUserById id is ${id}`);
    const response = await this.get(`/${id}`);
    console.log(`in getUserBy Id response is: `);
    console.dir(response);
    // response.id = response._id;
    return response;
  }

  async getJWT(email: string, password: string) {
    const response = await this.post('/login', { email, password });
    this.context.token = response.jwt;
    console.dir(response);
    return { jwt: response.jwt };
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
