#!/bin/bash

set -o pipefail

npm install yarn -g
yarn install

lint_log=$(yarn lint 2>&1)
lint_exit_code=$?

test_log=$(yarn test 2>&1)
test_exit_code=$?

echo "::set-output name=lint_log::${lint_log}"
echo "::set-output name=test_log::${test_log}"
echo "::set-output name=test_exit_code::$(($lint_exit_code | $test_exit_code))"

exit $(($lint_exit_code | $test_exit_code))
