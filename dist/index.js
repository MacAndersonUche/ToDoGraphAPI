"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_yoga_1 = require("graphql-yoga");
const db_1 = __importDefault(require("./db"));
const Mutation_1 = __importDefault(require("./resolvers/Mutation"));
const Query_1 = __importDefault(require("./resolvers/Query"));
const server = new graphql_yoga_1.GraphQLServer({
    typeDefs: "./src/schema.graphql",
    resolvers: {
        Query: Query_1.default,
        Mutation: Mutation_1.default
    },
    context: {
        db: db_1.default
    }
});
server.start(() => {
    console.log("The server is up!");
});
