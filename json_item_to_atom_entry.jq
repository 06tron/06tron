[
  "<entry><title>",
  .title,
  "</title><id>",
  .id,
  "</id><published>",
  .date_published,
  "</published><updated>",
  .date_modified,
  "</updated><content type=\"html\">",
  .content_html,
  "<link rel=\"alternate\" href=\"",
  .url,
  "\"/></entry>"
] | join("")

for testing:
{
	"id": "idnum", 
	"url": "https://example.com",
	"title": "TitleText",
	"content_html": "<div></div>",
	"date_published": "tuesday",
	"date_modified": "wednesday"
}
