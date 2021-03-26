const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./config/typedefs");
const { resolvers } = require("./config/resolvers");
const mongoose = require("mongoose");
const express = require("express");


const startServer = async () => {
    // Confs
    const app = express();
    const PORT = 4000;

    // Connection to the DB
    await mongoose.connect('mongodb://localhost:27017/esdb',
        { useNewUrlParser: true, useUnifiedTopology: true });

    // Server launch
    const server = new ApolloServer({ typeDefs, resolvers });

    server.applyMiddleware({ app });

    app.listen(PORT, () => {
        console.log(`[ES] | Server started at: http://localhost:${PORT}${server.graphqlPath}`);
    });

}

startServer();