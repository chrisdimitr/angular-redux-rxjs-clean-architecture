#!/usr/bin/env bash

ENVIRONMENT="$1"
DEPLOYMENT=""

pwd

if [ -z "$ENVIRONMENT" ]; then
  echo "script param: Environment name parameter is missing or empty!";
  exit 1;
else
  if [ "$ENVIRONMENT" == "development" ]; then
    DEPLOYMENT="dev"
  else
    DEPLOYMENT="prod"
  fi
fi

TAG_NAME="angular-redux-rxjs-clean-architecture:${DEPLOYMENT}"

docker build --build-arg ENV=${DEPLOYMENT} -t $TAG_NAME .