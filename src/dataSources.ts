import { AlbumAPI } from './modules/albums/albumDatasource';
import { ArtistAPI } from './modules/artists/artistDatasource';
import { BandAPI } from './modules/bands/bandDatasource';
import { GenreAPI } from './modules/genres/genreDatasource';
import { UserAPI } from './modules/users/userDatasource';

export const dataSources = () => {
  return {
    userAPI: new UserAPI(),
    artistAPI: new ArtistAPI(),
    bandAPI: new BandAPI(),
    genreAPI: new GenreAPI(),
    albumAPI: new AlbumAPI(),
  };
};
