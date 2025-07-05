#!/bin/bash

rm -r build
mkdir -p build/shortcuts/blog
cat feed.json | jq '.' --compact-output > build/feed.json
cat feed.json | jq --from-file json-feed-to-atom.jq --raw-output > build/atom.xml
cat feed.json | jq --from-file json-feed-to-html.jq --raw-output > build/shortcuts/blog/index.html
cp -R icons periods style.css build
for line in build/periods/*/*.html; do name=$(basename "$line" .html) && mkdir "build/shortcuts/$name" && mv "$line" "build/shortcuts/$name/index.html"; done
mv build/periods/* build && rm -r build/periods
cp mirror.html build/shortcuts/index.html
zip -r export.zip build
