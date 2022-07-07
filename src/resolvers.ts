import { albumResolver } from './modules/albums/albumResolver';
import { artistResolver } from './modules/artists/artistResolver';
import { bandResolver } from './modules/bands/bandResolver';
import { favouritesResolver } from './modules/favourites/favouritesResolver';
import { genreResolver } from './modules/genres/genreResolver';
import { userResolver } from './modules/users/userResolver';

export const resolvers = [
  userResolver,
  artistResolver,
  bandResolver,
  genreResolver,
  albumResolver,
  favouritesResolver,
];
