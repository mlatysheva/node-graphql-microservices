import { artistResolver } from './modules/artists/artistResolver';
import { bandResolver } from './modules/bands/bandResolver';
import { userResolver } from './modules/users/userResolver';

export const resolvers = [userResolver, artistResolver, bandResolver];
