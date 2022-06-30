export const resolvers = {
  Query: {
    getArtist: async (): Promise<Artist> => {
      const data = await fetch('http://localhost:3003/v1/artists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await data.json();
      console.dir(response);
      return response;
    },
    getArtists: async (): Promise<Artist[]> => {
      const data = await fetch('http://localhost:3003/v1/artists', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const response = await data.json();
      console.dir(response);
      return response;
    },
  },
};
