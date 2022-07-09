import { ApolloServer } from 'apollo-server';
import { resolvers } from './resolvers';
import dotenv from 'dotenv';
import { resolve } from 'path';
import { cwd } from 'process';
import typeDefs from './typeDefs';
import { UserAPI } from './modules/users/userDatasource';
import { ArtistAPI } from './modules/artists/artistDatasource';
import { dataSources } from './dataSources';
import { BandAPI } from './modules/bands/bandDatasource';
import { rootTypeDefs } from './rootQuery';
import { userTypeDefs } from './modules/users/userSchema';
import { artistTypeDefs } from './modules/artists/artistSchema';
import { bandTypeDefs } from './modules/bands/bandSchema';
import { printSchema } from 'graphql';
import { genreTypeDefs } from './modules/genres/genreSchema';
import { GenreAPI } from './modules/genres/genreDatasource';
import { albumTypeDefs } from './modules/albums/albumSchema';

dotenv.config({ path: resolve(cwd(), '.env') });

const APOLLO_PORT = process.env.PORT || 4000;

const server = new ApolloServer({
  typeDefs,
  // typeDefs: [
  //   rootTypeDefs,
  //   userTypeDefs,
  //   artistTypeDefs,
  //   bandTypeDefs,
  //   genreTypeDefs,
  //   albumTypeDefs,
  // ],
  resolvers,
  dataSources: dataSources,
  // dataSources: () => {
  //   return {
  //     userAPI: new UserAPI(),
  //     artistAPI: new ArtistAPI(),
  //     bandAPI: new BandAPI(),
  //     genreAPI: new GenreAPI(),
  //   };
  // },
  context: ({ req, res }) => {
    return {
      token: req.headers.authorization || 'default_token',
    };
  },
});

server.listen({ port: APOLLO_PORT }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
