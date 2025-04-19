#!/bin/bash

# Make model directory if it doesn't exist
mkdir -p server/model/u2net

# Download u2net.pth if it doesn't already exist
FILE=server/model/u2net/u2net.pth
if [ ! -f "$FILE" ]; then
    echo "Downloading u2net.pth..."
    wget --no-check-certificate "https://drive.usercontent.google.com/download?id=1ao1ovG1Qtx4b7EoskHXmi2E9rp5CHLcZ&authuser=0" -O "$FILE"
else
    echo "u2net.pth already exists. Skipping download."
fi

# Start the app
uvicorn app:app --host 0.0.0.0 --port 10000
