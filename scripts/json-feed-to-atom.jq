[
	"<?xml version=\"1.0\" encoding=\"utf-8\"?>",
	"<feed xmlns=\"http://www.w3.org/2005/Atom\"><title>",
	.title,
	"</title><subtitle>",
	.description,
	"</subtitle><id>",
	._atom_elements.id,
	"</id><updated>",
	._atom_elements.updated,
	"</updated>",
	(.authors[] | [
		"<author><name>",
		.name,
		"</name><uri>",
		.url,
		"</uri></author>"
	]),
	"<link rel=\"self\" href=\"",
	._atom_elements.self_link,
	"\"/><link rel=\"alternate\" href=\"",
	.home_page_url,
	"\"/><icon>",
	.icon,
	"</icon>",
	(.items[] | [
		"<entry><title>",
		.title,
		"</title><id>",
		.id,
		"</id><published>",
		.date_published,
		"</published><updated>",
		.date_modified,
		"</updated><content type=\"xhtml\"><div xmlns=\"http://www.w3.org/1999/xhtml\">",
		.content_html,
		"</div></content><link rel=\"alternate\" href=\"",
		.url,
		"\"/>",
		(.tags[] | [
			"<category term=\"",
			.,
			"\"/>"
		]),
		"</entry>"
	]),
	"</feed>"
] | flatten | join("")
