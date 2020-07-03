const { GraphQLServer } = require('graphql-yoga');
const { PrismaClient } = require('@prisma/client');

const resolvers = {
  Query: {
    info: () => 'This is the API for the stagewood test project',
    feed: async (parent, args, context) => {
      return context.prisma.link.findMany();
    },
    link: async (parent, args, context) => {
      return context.prisma.link.findOne({ where: { id: args.id }});
    },
  },
  Mutation: {
    post: (parent, args, context, info) => {
      const newLink = context.prisma.link.create({
        data: {
          url: args.url,
          description: args.description,
        },
      });
      return newLink;
    },
    updateLink: (parent, args) => {
      const link = links.find((e) => e.id === `link-${args.id}`);
      if (link === undefined) return null;
      link.url = args.url ?? link.url;
      link.description = args.description ?? link.description;
      return link;
    },
    deleteLink: (parent, args) => {
      const link = links.find((e) => e.id === `link-${args.id}`);
      if (link === undefined) return null;
      links = links.filter((e) => e.id !== link.id);
      return link;
    },
  },
};

const prisma = new PrismaClient();

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {
    prisma,
  },
});

server.start(() => console.log('Server is running on localhost:4000'));