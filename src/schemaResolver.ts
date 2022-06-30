import { gql } from 'apollo-server';


export const read = async (path: string) => {
  try {
    const controller = new AbortController();
    const signal = await controller.signal;
    const promise = readFile(path, { signal });
    const str = await promise;
    controller.abort();
    return str.toString('utf8');
  } catch (err) {
    if (err) {
      console.error(err);
    }
  }
};

const data = await read('./modules/users/user.graphql');
const typeDefs = gql(data ? data : '1');
