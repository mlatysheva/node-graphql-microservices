import { rootTypeDefs } from './rootQuery';
import { userTypeDefs } from './modules/users/userSchema';
import { artistTypeDefs } from './modules/artists/artistSchema';

const typeDefs = [rootTypeDefs, userTypeDefs, artistTypeDefs];

export default typeDefs;
