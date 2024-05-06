#!/bin/bash

# Check if the Kafka container already exists
if [[ "$(docker ps -a | grep kafka_container)" ]]; then
  echo "Kafka container already exists. Starting the existing container..."
  docker start kafka_container
else
  # Pull the Kafka image if not already pulled
  if [[ ! "$(docker images -q apache/kafka:3.7.0)" ]]; then
    echo "Pulling Kafka image..."
    docker pull apache/kafka:3.7.0
  fi

  # Run Kafka container in detached mode
  echo "Starting Kafka container..."
  docker run -d -p 9092:9092 --name kafka_container apache/kafka:3.7.0
fi
