#!/bin/bash

echo "Building Project: Attilaart"
cd "$(dirname "$0")"
docker build -t attilaart .

if ! docker rmi attilaart; then
  echo "ERROR: failed to remove previous instance"
  exit 126
else
  if ! docker run --name attilaart -d -p 8000:8000 attilaart; then
    echo "ERROR: failed to start docker container instance"
    exit 126
  fi
fi

ufw allow 8000
ufw enable

echo "Successfully initialised Attilaart"
