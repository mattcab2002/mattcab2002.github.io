import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from '@as-integrations/next';
import { gql } from 'graphql-tag';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const typeDefs = gql`
  type Query {
    workExperiences: [WorkExperience]
    tags: Tag
  }
  
  type WorkExperience {
    id: String,
    header: String,
    subHeader: String,
    body: String,
    tags: [Tag],
    companyName: String
  }
  
  type Tag {
    id: String,
    name: String,
    workExperiences: [WorkExperience]
  }
  
  type Company {
    id: String,
    name: String,
    workExperiences: [WorkExperience]
  }
`;

const resolvers = {
  Query: {
    workExperiences: () => {
      return prisma.workExperience.findMany({include: {tags: true}})
    },
    tags() {
      return prisma.tag.findMany()
    }
  },
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

export default startServerAndCreateNextHandler(apolloServer);
