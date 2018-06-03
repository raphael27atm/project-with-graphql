import { makeExecutableSchema } from 'graphql-tools';

const users: any[] = [
  {
    id: 1,
    name: 'Raphael',
    email: 'raphael@email.com'
  },
  {
    id: 2,
    name: 'Marlon',
    email: 'marlon@email.com'
  }
];

const typeDefs = `
  type User {
    id: ID!,
    name: String!,
    email: String!,
  }

  type Query {
    allUsers: [User!]!
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  }
`;

const resolvers = {
  Query: {
    allUsers: () => users
  },
  Mutation: {
    createUser: (parent, args) => {
      const newUser = Object.assign({id: users.length + 1}, args);
      return newUser;
    }
  }
};

export default makeExecutableSchema({ typeDefs, resolvers});
