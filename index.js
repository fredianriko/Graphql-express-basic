const {ApolloServer} = require('apollo-server-express')
const express = require('express')
const app  = express()
const {typeDefs} = require('./schema/TypeDefs')
const {resolvers} = require('./schema/Resolvers')


const start = async () => {
    const server = new ApolloServer({typeDefs, resolvers})
    await server.start();
    server.applyMiddleware({app})
    app.listen(3001, () => {
        console.log('Server running on port 3001')
    })
}

start()
