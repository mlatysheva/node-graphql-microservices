import { gql } from 'apollo-server';

const Query = gql`
  type Query
  type Mutation
`;

const typeDefs = [Query];

export { typeDefs };
