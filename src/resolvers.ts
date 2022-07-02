import { artistResolver } from './modules/artists/artistResolver';
import { userResolver } from './modules/users/userResolver';

export const resolvers = [userResolver, artistResolver];
