const userResolvers = {
  Query: {
    users: ( root, args, { dataSources }, info ) => {
      return dataSources.usersApi.getUsers()
    },
    user: (root, { id }, { dataSources }) => {
      return dataSources.usersApi.getUser(id)
    }
  }
};

module.exports = userResolvers;