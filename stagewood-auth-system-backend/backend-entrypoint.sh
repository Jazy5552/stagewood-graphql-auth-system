#!/bin/sh
set -e
npx prisma migrate up --experimental
npx prisma generate
yarn start