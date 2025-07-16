[
	"<!DOCTYPE html><html lang=\"en\"><head><title>",
	.title,
	"</title><meta charset=\"utf-8\"><meta name=\"author\" content=\"",
	.authors[0].url,
	"\"><meta name=\"color-scheme\" content=\"dark light\">",
	"<meta name=\"description\" content=\"",
	.description,
	"\"><meta name=\"viewport\" content=\"width=device-width\">",
	"<link rel=\"icon\" href=\"",
	.icon,
	"\"><link rel=\"stylesheet\" href=\"../../style.css\"></head><body><header><h1>",
	.title,
	"</h1><p>",
	.description,
	"</p></header>",
	(.items | length as $len | to_entries[] | [
		"<article id=\"",
		$len - .key,
		"\"><hgroup><h2>",
		.value.title,
		"</h2><p>",
		.value.date_published,
		"</p></hgroup>",
		.value.content_html,
		"</article>"
	]),
	"</body></html>"
] | flatten | join("")
