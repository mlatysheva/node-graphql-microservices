import { rootTypeDefs } from './rootQuery';
import { userTypeDefs } from './modules/users/userSchema';
import { artistTypeDefs } from './modules/artists/artistSchema';
import { bandTypeDefs } from './modules/bands/bandSchema';
import { genreTypeDefs } from './modules/genres/genreSchema';
import { albumTypeDefs } from './modules/albums/albumSchema';
import { favouritesTypeDefs } from './modules/favourites/favouritesSchema';

const typeDefs = [
  rootTypeDefs,
  userTypeDefs,
  artistTypeDefs,
  bandTypeDefs,
  genreTypeDefs,
  albumTypeDefs,
  favouritesTypeDefs,
];

export default typeDefs;
