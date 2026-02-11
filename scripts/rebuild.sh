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
for line in export/periods/*/*.htm
do
	name=$(basename "$line" .htm)
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

# periods
#  └── {period-a}
#       ├── {nickname-a-i}.htm
#       └── {any-file-a-j}
# export
#  ├── shortcuts
#  │    └── {nickname-y-i}
#  │         └── index.html
#  └── {period-z}
#       ├── index.html
#       └── {any-file-z-i}
