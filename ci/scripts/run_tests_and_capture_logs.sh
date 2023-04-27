#!/bin/bash

set -o pipefail

npm install yarn -g
yarn install

# Run lint and tests, capture the output to log files, and allow them to fail
yarn lint 2> lint.log || exit_code=$?
yarn test 2> test.log || exit_code=$?

# Set the outputs for the GitHub Actions step
echo "::set-output name=lint_log::$(base64 lint.log)"
echo "::set-output name=test_log::$(base64 test.log)"

# Exit the script with the appropriate exit code
exit $exit_code
