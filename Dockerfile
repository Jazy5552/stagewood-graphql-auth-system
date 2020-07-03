# Docker container meant for development
FROM node:14.5-stretch

RUN mkdir /db
VOLUME /db

# Prisma Studio Server port
EXPOSE 5555

# Backend Server port
EXPOSE 4000

# Frontend Server port
EXPOSE 3000