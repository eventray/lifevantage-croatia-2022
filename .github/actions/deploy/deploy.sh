#!/usr/bin/env bash

set -e
set -x

NAME=$1
CONTENT_PATH=$2

yarn
yarn build

ansible-playbook \
    /src/deploy/deploy.yaml \
    -e folder_name=${NAME} \
    -e file_root=${CONTENT_PATH}
