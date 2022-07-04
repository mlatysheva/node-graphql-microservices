import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';
import typeDefs from './typeDefs';
import { UserAPI } from './modules/users/userDatasource';
import { ArtistAPI } from './modules/artists/artistDatasource';

dotenv.config({ path: resolve(cwd(), '.env') });

const APOLLO_PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => {
    return {
      userAPI: new UserAPI(),
      artistAPI: new ArtistAPI(),
    };
  },
  context: ({ req, res }) => {
    return {
      token: req.headers.authorization || 'default_token',
    };
  },
});

server.listen({ port: APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
