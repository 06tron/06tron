#!/bin/bash

cat feed.json | jq '.items |= [{
    id: $uuid,
	url: ["https://home.6t.lt/shortcuts/blog/#", length + 1] | join(""),
	title: "",
	content_html: $html,
	summary: "",
	date_published: $date,
	date_modified: $date,
	tags: []
}, .[]]' --arg uuid "urn:uuid:$(uuidgen)" --arg html "$(pbpaste)" --arg date "$(date +%FT%T%z)" > feed.json
