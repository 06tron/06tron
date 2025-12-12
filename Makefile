articles/item-%.json: articles/%.xml
	cat articles/structure.json | jq '.named_items."$*"|.date_modified=$$time|.content_html=$$html' --arg time "$$(git log -1 --pretty=format:%aI $<)" --arg html "$$(cat $<)" --compact-output > $@
