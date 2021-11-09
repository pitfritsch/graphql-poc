const { GraphQLScalarType } = require("graphql");

const userResolvers = {
  Datetime: new GraphQLScalarType({
    name: 'Datetime',
    description: 'data e hora',
    serialize: (value) => value.toISOStrinh(),
    parseValue: (value) => new Date(value),
    parseLiteral: (ast) => new Date(ast.value)
  }),
  Query: {
    users: ( root, args, { dataSources }, info ) => {
      return dataSources.usersApi.getUsers()
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersApi.getUser(id)
    }
  },
  Mutation: {
    addUser: (root, user, { dataSources }) => {
      return dataSources.usersApi.addUser(user)
    },
    attUser: (root, user, { dataSources }) => {
      return dataSources.usersApi.attUser(user)
    },
    deleteUser: (root, { id }, { dataSources }) => {
      return dataSources.usersApi.deleteUser(id)
    }
  }
};

module.exports = userResolvers;