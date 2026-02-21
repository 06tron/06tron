.SECONDARY:

all: articles/feed.json
	./scripts/rebuild.sh

# Creates a Feed {
#	version: "https://jsonfeed.org/version/1.1";
#	title: string;
#	home_page_url: string; // main url for website version of the feed
#	feed_url: string; // url of the feed itself
#	description: string;
#	icon: string; // url of icon image
#	authors: Array<{
#		name: string;
#		url: string; // url to identify author
#	}>;
#	language: string; // in RFC 5646 format, ex: "en-US"
#	items: Array<FeedItem>;
#	_atom_elements: {
#		id: string; // unique identifier
#		updated: string; // time of last feed modification in RFC 3339 format
#		link_self: string; // link to this feed in Atom format
#	};
# } for the blog, to be later transformed into HTML and Atom.
articles/feed.json: $(patsubst articles/%.xml,articles/item-%.json,$(wildcard articles/*.xml))
	jq '.[0]*{items:.[1:]|reverse,_atom_elements:{updated:$$time}}|del(._named_items)' --arg time "$$(git log -1 --pretty=format:%aI articles)" -sc outline.json $(sort $^) > $@

# Creates a FeedItem {
#	id: string; // unique identifier
#	url: string; // main url for item
#	title: string;
#	content_html: string;
#	summary: string;
#	date_published: string; // date and time in RFC 3339 format
#	date_modified: string;
#	tags: Array<string>; // usually just one word for each tag
# } for a specific article. Edits "title" of and adds "date_modified" and "content_html" to the existing data in outline.json
articles/item-%.json: articles/%.min.xml outline.json
	jq '._named_items."$*"|.+{title:("$* - "+.title),date_modified:$$time,content_html:$$html}' --arg time "$$(git log -1 --pretty=format:%aI $<)" --arg html "$$(cat $<)" -c outline.json > $@

articles/%.min.xml: articles/%.xml
	perl -0076 -pe 's/[\t\n]//g; s/&#x9;/\t/g; s/&#xA;/\n/g' $< > $@
