export const resolvers = {
  Query: {
    getBand: async (): Promise<Band> => {
      const data = await fetch('http://localhost:3003/v1/bands', {
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
