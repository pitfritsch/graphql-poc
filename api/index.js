const { ApolloServer } = require("apollo-server");
const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core");
const userSchema = require("./user/schema/user.graphql");
const userResolvers = require("./user/resolvers/userResolvers");

const typeDefs = [userSchema]
const resolvers = [userResolvers]

const server = new ApolloServer({ typeDefs, resolvers, plugins: [ApolloServerPluginLandingPageGraphQLPlayground()] });

server.listen({ port: 4000 }).then(({ url }) => {
  console.log("Servdor rodando", url);
});