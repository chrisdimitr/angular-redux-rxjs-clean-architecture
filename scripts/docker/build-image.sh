#!/usr/bin/env bash

ENVIRONMENT="$1" # Could be 'development', 'uat' or 'Production'
VERSION="$2" # Could be e.g 'XXX.YYY.ZZZ'

if [ -z "$ENVIRONMENT" ]; then
  echo "Script param: Environment parameter is missing or empty!";
  exit 1;
else
  if [ -z "$VERSION" ]
  then
    echo "Script param: Version parameter is missing or empty!";
    exit 1;
  fi

  echo "Using environment: $ENVIRONMENT"
  echo "Using version: $VERSION"

  IMAGE_NAME="angular-redux-rxjs-clean-architecture"

  if [[ "$ENVIRONMENT" == "development"  ||  "$ENVIRONMENT" == "uat" ]]; then
    TAG="${IMAGE_NAME}:${ENVIRONMENT}-v${VERSION}"

    echo "Creating an image with the tag '${TAG}'"
    docker build --build-arg BUILD_ENV_TAG="${ENVIRONMENT}" -t "${TAG}" --progress=plain --no-cache .

    #echo "Pushing the image '${TAG}' to registry"
    #docker push "${TAG}"
  else
    TAG="${IMAGE_NAME}:v${VERSION}"
    LATEST_TAG="${IMAGE_NAME}:latest"

    echo "Creating an image with tags '${TAG}' and '${LATEST_TAG}'"
    docker build --build-arg BUILD_ENV_TAG=production -t "${TAG}" -t "${LATEST_TAG}" --progress=plain --no-cache .

    #echo "Pushing the image '${TAG}' to registry"
    #docker push "${TAG}"

    #echo "Pushing the image '${LATEST_TAG}' to registry"
    #docker push "${LATEST_TAG}"
  fi
fi