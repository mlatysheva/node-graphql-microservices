import { rootTypeDefs } from './rootQuery';
import { userTypeDefs } from './modules/users/userSchema';
import { artistTypeDefs } from './modules/artists/artistSchema';
import { bandTypeDefs } from './modules/bands/bandSchema';

const typeDefs = [rootTypeDefs, userTypeDefs, artistTypeDefs, bandTypeDefs];

export default typeDefs;
