#!/bin/bash

rm -r export # 00
mkdir -p export/shortcuts/blog # 01
jq scripts/json-feed-to-atom.jq -rf articles/feed.json > export/atom.xml # 10
jq scripts/json-feed-to-html.jq -rf articles/feed.json | sed 's;="https://home.6t.lt/;="../../;g' > export/shortcuts/blog/index.html # 11
cp articles/feed.json export/feed.json # 20
rsync -r --exclude='.*' fonts icons periods index.html style.css export # 21
mv export/icons/favicon.ico export # 22
echo 'const jsonFeed=' | cat - export/feed.json mainpage.js > export/mainpage.js # 23
cp mirror.html export/shortcuts/index.html # 24
for line in export/periods/*/*.html
do
	name=$(basename "$line" .html)
	mkdir export/shortcuts/"$name" # 30
	mv "$line" export/shortcuts/"$name"/index.html # 31
done
for line in export/periods/*/
do
	(cd "$line" && tree -H './' -I '*index.html' --hintro=../../../sitemap.html -o index.html) # 40
done
mv export/periods/* export # 45
rmdir export/periods # 46
(cd export/icons && tree -H './' -I '*index.html' --hintro=../../sitemap.html -o index.html) # 50
(cd export/fonts && tree -H './' -I '*index.html' --hintro=../../sitemap.html -o index.html) # 51
mkdir export/sitemap # 80
(cd export && tree -H '../' -I '*index.html' -I '_*' --hintro=../sitemap.html -o sitemap/index.html) # 81
cp ~/rsync/Documents/Resumes/latest.pdf export/shortcuts/resume # 90
cp 404.html _headers _redirects export # 91

# add-item.sh
# build
#  ├── export.zip                    90
#  ├── feed.json
#  ├── home                          01
#  │    ├── atom.xml                 11
#  │    ├── docs                     
#  │    │    └── ...                  
#  │    ├── feed.json                10
#  │    ├── _headers                 20
#  │    ├── icons                    20
#  │    │   ├── 16.png               20
#  │    │   ├── 48.svg               20
#  │    │   └── index.html           48
#  │    ├── index.html               20
#  │    ├── mainpage.js              25
#  │    ├── _redirects               20
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
# draft.xht
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
