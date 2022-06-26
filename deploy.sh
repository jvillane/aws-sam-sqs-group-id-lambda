#!/bin/bash

: "${STACK_NAME:=$1}"
: "${S3_BUCKET:=$2}"

if [[ -z ${STACK_NAME} ]] ; then
  echo "No stackname was provided."
  echo "Use: sh deploy.sh <STACK_NAME>"
  exit 2
fi

echo '...cleaning distribution folder'
rm -rf dist && mkdir dist

echo '...building production source code node_modules'
rm -rf node_modules && npm install && tsc

sam package --output-template-file packaged.yaml --template-file cloudformation.yaml --s3-bucket ${S3_BUCKET}
sam deploy --template-file packaged.yaml --capabilities CAPABILITY_NAMED_IAM --stack-name ${STACK_NAME}

exit 0
