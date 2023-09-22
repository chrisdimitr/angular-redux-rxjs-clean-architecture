#!/usr/bin/env bash

DIR="${BASH_SOURCE%/*}"
if [[ ! -d "$DIR" ]]; then DIR="$PWD"; fi
. "$DIR/utils.sh"

NEW_VERSION="$1"

PROPERTY_FILE="package.json"

PREV_VERSION=$(getProperty $PROPERTY_FILE "version")

./updateProjectVersion.sh $NEW_VERSION $PREV_VERSION
status=$?

if [ $status -eq 1 ]
then
  exit 1;
fi

VERSION=$(getProperty $PROPERTY_FILE "version")

TAG_NAME="v$VERSION";

./finalizeReleaseNotes.sh $TAG_NAME
status=$?

if [ $status -eq 1 ]
then
  exit 1;
fi

if git ls-remote --exit-code --tags origin refs/tags/$TAG_NAME > /dev/null 2>&1; then
  echo "Tag $TAG_NAME already exists";
else
  git tag -a $TAG_NAME -m "Tagged version $VERSION";
  git push origin master $TAG_NAME -o ci.skip; # Prevent triggering pipeline again

  echo "Message: Master branch tagged successfully as '$TAG_NAME' with the relevant release notes!";
fi
