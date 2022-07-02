import { ArtistAPI } from './modules/artists/artistDatasource';
import { UserAPI } from './modules/users/userDatasource';

export const dataSources = {
  userAPI: new UserAPI(),
  artistAPI: new ArtistAPI(),
};
