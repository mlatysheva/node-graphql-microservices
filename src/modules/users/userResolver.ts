import { UserInput } from './userSchema';

export const userResolver = {
  Query: {
    user: async (_: any, { id }: any, { dataSources }: any) => {
      console.log(`id is ${id}`);
      const response = await dataSources.userAPI.getUserById(id);
      console.log('user reponses is');
      console.dir(response);
      return response;
    },
    jwt: async (_: any, { email, password }: any, { dataSources }: any) => {
      const jwt = await dataSources.userAPI.getJWT(email, password);
      return jwt.jwt;
    },
  },
  User: {
    id: (parent: any) => parent._id,
  },
  Mutation: {
    register: (_: any, data: UserInput, { dataSources }: any) => {
      const response = dataSources.userAPI.registerUser(data);
      console.log(`resolver register: ${response}`);
      return response;
    },
  },
};
