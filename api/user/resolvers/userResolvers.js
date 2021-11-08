const userResolvers = {
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
    }
  }
};

module.exports = userResolvers;