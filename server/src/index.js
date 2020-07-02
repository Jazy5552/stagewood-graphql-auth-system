const { GraphQLServer } = require('graphql-yoga');

let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}];

let idCount = links.length;
const resolvers = {
  Query: {
    info: () => 'This is the API for the stagewood test project',
    feed: () => links,
    link: (parent, args) => links[args.id],
  },
  Mutation: {
    post: (parent, args) => {
      const link = {
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url
      };
      links.push(link);
      return link;
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
  Link: {
    appletree: () => "Apple tree",
  },
};

const server = new GraphQLServer({
  typeDefs: './src/schema.graphql',
  resolvers,
});

server.start(() => console.log('Server is running on localhost:4000'));