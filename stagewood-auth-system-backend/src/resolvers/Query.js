function info() {
  return 'This is the API for the stagewood test project';
}

function feed(parent, args, context) {
  return context.prisma.link.findMany();
}

function link(parent, args, context) {
  return context.prisma.link.findOne({ where: { id: parseInt(args.id) }});
}

module.exports = {
  info,
  feed,
  link,
}
