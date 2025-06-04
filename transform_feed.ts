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
