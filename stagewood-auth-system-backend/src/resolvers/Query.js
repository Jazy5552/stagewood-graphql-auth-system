const { getUserId } = require("../utils");

function info() {
  return 'This is the API for the stagewood test project';
}

function feed(parent, args, context) {
  // Hope prisma sanitizes where input
  const where = args.filter
    ? {
      OR: [
        { description: { contains: args.filter } },
        { url: { contains: args.filter } },
      ],
    }
    : {};

  return context.prisma.link.findMany({
    where,
    skip: args.skip,
    take: args.take,
  });
}

function link(parent, args, context) {
  return context.prisma.link.findOne({
    where: {
      id: parseInt(args.id),
    },
  });
}

function user(parent, args, context) {
  const userId = getUserId(context);

  return context.prisma.user.findOne({
    where: {
      id: userId,
    },
  });
}

module.exports = {
  info,
  feed,
  link,
  user,
}
