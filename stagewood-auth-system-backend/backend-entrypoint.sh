#!/bin/sh
set -e
sleep 10 # Wait for db to spin up
yarn prisma
yarn start