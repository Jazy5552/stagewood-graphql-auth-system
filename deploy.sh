#!/bin/bash
if [ "$1" = "build" ]
then
  docker-compose -f docker-swarm.yml build
fi
docker stack deploy --compose-file <(docker-compose -f docker-swarm.yml config) stagewood --prune

