import { ApolloServer } from 'apollo-server';
import { trackTypeDefs } from './modules/tracks/trackSchema';
import { resolvers } from './modules/users/userResolver';
import { userTypeDefs } from './modules/users/userSchema';
import { artistTypeDefs } from './modules/artists/artistSchema';
import { bandTypeDefs } from './modules/bands/bandSchema';
import { favouritesTypeDefs } from './modules/favourites/favouritesSchema';
import { mergeTypeDefs } from '@graphql-tools/merge';

const server = new ApolloServer({
  typeDefs: [
    userTypeDefs,
    // trackTypeDefs,
    // artistTypeDefs,
    // bandTypeDefs,
    // favouritesTypeDefs,
  ],
  resolvers,
  context: ({ req, res }: any) => ({ req, res }),
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
