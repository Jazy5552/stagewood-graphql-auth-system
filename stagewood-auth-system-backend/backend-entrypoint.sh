#!/bin/sh
npx prisma migrate up --experimental
yarn start