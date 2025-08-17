#!/bin/bash

echo "Building Project: Attilaart"
cd "$(dirname "$0")"
docker build -t attilaart .
docker run --name attilaart -d -p 8000:8000 attilaart
ufw allow 8000
ufw enable

echo "Successfully initialised Attilaart"
