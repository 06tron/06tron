#!/bin/bash

rm -r home export.zip # 00
mkdir -p home/shortcuts/blog # 01
cat feed.json | jq '.' --compact-output > home/feed.json # 10
cat feed.json | jq --from-file json-feed-to-atom.jq --raw-output > home/atom.xml # 11
cat feed.json | jq --from-file json-feed-to-html.jq --raw-output | sed 's;href="https://home.6t.lt/;href="../../;g' > home/shortcuts/blog/index.html # 12
cp -R ../icons ../periods ../style.css home # 20
for line in home/periods/*/*.html
do
	name=$(basename "$line" .html)
	mkdir "home/shortcuts/$name" # 30
	mv "$line" "home/shortcuts/$name/index.html" # 40
done
for line in home/periods/*/
do
	(cd "$line" && tree -H './' -I '*index.html' --info --hintro=../../../sitemap.html -o index.html) # 45
done
mv home/periods/* home && rm -r home/periods # 50
cp mirror.html home/shortcuts/index.html # 60
mkdir home/sitemap # 80
cd home # 81
tree -H '../' -I '*index.html' --noreport --hintro=../sitemap.html -o sitemap/index.html # 82
cd .. # 83
zip -r export.zip home # 90

# build
#  ├── add-item.sh
#  ├── draft.xht
#  ├── export.zip                    90
#  ├── feed.json
#  ├── home                          01
#  │    ├── atom.xml                 11
#  │    ├── docs                     
#  │    │    └── ...                  
#  │    ├── feed.json                10
#  │    ├── icons                    20
#  │    │   ├── 16.png               20
#  │    │   └── 48.svg               20
#  │    ├── index.html
#  │    ├── robots.txt               
#  │    ├── shortcuts                01
#  │    │    ├── blog                01
#  │    │    │    └── index.html     12
#  │    │    ├── index.html          60
#  │    │    ├── {submodule-x}       
#  │    │    │    └── ...            
#  │    │    └── {nickname-y-i}      30
#  │    │         └── index.html     40
#  │    ├── sitemap                  80
#  │    │    ├── index.html          82
#  │    │    └── ?.xml
#  │    ├── style.css                20
#  │    └── {period-z}               50
#  │         ├── index.html          45
#  │         └── {any-file-z-i}      20
#  ├── json-feed-to-atom.jq
#  ├── json-feed-to-html.jq
#  ├── mirror.html
#  ├── rebuild.sh
#  └── sitemap.html
# .git
# .gitignore
# .gitmodules
# icons
#  ├── 16.png
#  └── 48.svg
# periods
#  └── {period-a}
#       ├── {any-file-a-i}
#       └── {nickname-a-i}.html
# README.rst
# style.css
# ts
#  ├── .eslintrc.json
#  ├── node_modules
#  │    └── ...
#  ├── package.json
#  ├── package-lock.json
#  ├── tsconfig.json
#  ├── .vscode
#  │    └── settings.json
#  └── {submodule-b}
#       ├── build
#       │    └── ...
#       └── ... 

# <!DOCTYPE html><html><head><meta http-equiv="refresh" content="0;url=https://06tron.github.io/cycling"></head></html>
