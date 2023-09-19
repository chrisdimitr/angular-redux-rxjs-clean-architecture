#!/usr/bin/env bash

DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$DIR" ]]; then DIR="$PWD"; fi
. "$DIR/utils.sh"

NEW_VERSION="$1"
PREV_VERSION="$2"

PROPERTY_FILE="package.json"

if [ -z "$NEW_VERSION" ]
then
  echo "script param: Version parameter is missing or empty!";
  exit 1;
fi

if [ -z "$PREV_VERSION" ]
then
  PREV_VERSION=$(getProperty $PROPERTY_FILE "version")
fi

echo "message: Previous version is '$PREV_VERSION'"

if [ "$NEW_VERSION" == "$PREV_VERSION" ]
then
  echo "message: Version '$NEW_VERSION' already exists!";
  exit 1;
fi

VERSION_UPDATE_COMMIT_MSG="Updated project version to $NEW_VERSION"

sed -i "s/\"version\": \".*\"/\"version\": \"$NEW_VERSION\"/" $PROPERTY_FILE
git add -A
git commit -m "$VERSION_UPDATE_COMMIT_MSG"

echo "message: Project version updated successfully to '$NEW_VERSION'!";
