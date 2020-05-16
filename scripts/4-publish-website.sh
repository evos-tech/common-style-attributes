#!/usr/bin/env bash
rm -fr dist/demo
ng build --prod
pushd dist/common-style-attributes
surge . common-style-attributes.surge.sh
popd
