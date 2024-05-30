import express from "express";
import bodyParser from "body-parser";
//@ts-ignore
import cors from "cors";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { graphql } from "graphql";
import { prismaClient } from "../clients/db";

import { User } from "./user";
import { GraphQLContext } from "../interfaces";
import JWTService from "../services/jwt";



export async function initServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  const graphqlServer = new ApolloServer<GraphQLContext>({
    typeDefs: `
        ${User.types}
        type Query {
            ${User.queries}
        }
        `,
    resolvers: {
      Query: {
        ...User.resolvers.queries,
      },
    },
  });

  await graphqlServer.start();

  app.use("/graphql", expressMiddleware(graphqlServer,{
    context: async({req,res}) => {
    return {
      user : req.headers.authorization ? JWTService.decodeToken(req.headers.authorization.split('Bearer ')[1]) : undefined
    }
  }
}));

  return app;
}
