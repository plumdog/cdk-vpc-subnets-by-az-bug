#!/bin/bash -e

npm run -- cdk synth --json | grep -v '^>' | jq .Outputs
