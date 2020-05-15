#!/usr/bin/env bash
rm -fr dist/demo
ng build --prod
pushd dist/common-style-attributes
python -m SimpleHTTPServer 8000
popd
