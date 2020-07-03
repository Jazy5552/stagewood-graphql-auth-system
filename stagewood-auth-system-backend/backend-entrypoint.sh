#!/bin/sh
npx prisma migrate up --experimental
npx prisma generate
yarn start