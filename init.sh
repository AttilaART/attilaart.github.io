#!/bin/bash

echo "Building Project: Attilaart"
cd "$(dirname "$0")"

containerid=$(docker ps -a -q -f name="attilaart")

if ! $containerid; then
  echo "Deleting previous container: $containerid"

  if ! docker rm $containerid --force; then
    echo "ERROR: failed to remove previous instance"
    exit 126
  fi
fi

if ! docker build -t attilaart .; then
  echo "ERROR: failed to build docker image"
  exit 126
fi

if ! docker run --name attilaart -d -p 8000:8000 attilaart; then
  echo "ERROR: failed to start docker container instance"
  exit 126
fi

echo "Allowing port 8000"
ufw allow 8000
echo "y" | sudo ufw enable

echo "Successfully initialised Attilaart"
