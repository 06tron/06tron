interface FeedItem {
	id: string; // unique identifier
	url: string; // main url for item
	title: string;
	content_html: string; // HTML
	summary: string;
	date_published: string; // date and time in RFC 3339 format
	date_modified: string; // date and time in RFC 3339 format
	tags: Array<string>; // usually just one word for each tag
}

interface Feed {
	version: "https://jsonfeed.org/version/1.1";
	title: string;
	home_page_url: string; // main url for website associated with the feed
	feed_url: string; // url of the feed itself
	description: string;
	icon: string; // url of icon image
	authors: Array<{
		name: string;
		url: string; // url to identify author
	}>;
	language: string; // in RFC 5646 format, ex: "en-US"
	items: Array<FeedItem>;
	_atom_elements: {
		id: string; // unique identifier
		updated: string; // time of last feed modification
		link_self: string; // link to this feed in Atom format
	};
}
