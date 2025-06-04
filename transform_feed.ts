interface FeedAttachment {
	url: string; // main url for attachment
	mime_type: string; // MIME type of the attachment
	title: string;
}

interface FeedItem {
	id: string; // unique identifer
	url: string; // main url for item
	title: string;
	content_html: string; // HTML
	summary: string;
	date_published: string; // date and time in RFC 3339 format
	date_modified: string; // date and time in RFC 3339 format
	tags: Array<string>; // usually just one word for each tag
	attachments: Array<FeedAttachment>;
}

interface Feed {
	version: "https://jsonfeed.org/version/1.1";
	title: string;
	home_page_url: string; // main url for website associated with the feed
	feed_url: string; // url of the feed itself
	description: string;
	next_url?: string; // url of the continuation of this feed, if not all entries are included in this one
	authors: Array<{
		name: string;
		url: string; // url to identify author
	}>;
	language: string; // in RFC 5646 format, ex: "en-US"
}
