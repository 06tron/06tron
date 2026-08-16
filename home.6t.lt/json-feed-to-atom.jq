# Copyright (c) 2026, Matthew Richardson
# (https://orcid.org/0009-0001-0977-2029).
#
# This Source Code Form is subject to the terms of the Mozilla Public
# License, v. 2.0. If a copy of the MPL was not distributed with this
# file, You can obtain one at https://mozilla.org/MPL/2.0/.

._prefix_for_tag_urls as $tag_prefix | [
	"<?xml\nversion='1.0'\nencoding='utf-8'?>",
	"<feed\nxmlns='http://www.w3.org/2005/Atom'\nxml:base='https://home.6t.lt/'>","<about\nxmlns='https://6t.lt/about'>Use the URL of this XML file to read posts from my website in any feed reader that supports the Atom Syndication Format.</about>",
	"<title>",
	.title,
	"</title><updated>",
	._atom_elements.updated,
	"</updated><subtitle>",
	.description,
	"</subtitle><icon>",
	.icon,
	"</icon>",
	(.authors[] | [
		"<author><name>",
		.name,
		"</name><uri>",
		.url,
		"</uri></author>"
	]),
	"<link\nrel='alternate'\nhref='",
	.home_page_url,
	"'\ntype='text/mf2+html'/>",
	"<link\nrel='alternate'\nhref='",
	.feed_url,
	"'\ntype='application/feed+json'/>",
	"<link\nrel='self'\nhref='",
	._atom_elements.self_link,
	"'\ntype='application/atom+xml'/>",
	(.items[] | [
		"<entry><title>",
		.title,
		"</title><published>",
		.date_published,
		"</published>",
		"<link rel='alternate'\nhref='",
		.url,
		"'/>",
		"<content\ntype='xhtml'>",
		"<div\nxmlns='http://www.w3.org/1999/xhtml'>",
		.content_html,
		"</div></content><id>",
		.id,
		"</id><updated>",
		.date_modified,
		"</updated>",
		(.tags[] | [
			"<category\nterm='",
			$tag_prefix,
			.,
			"'\nlabel='",
			.,
			"'/>"
		]),
		"</entry>"
	]),
	"<id>",
	._atom_elements.id,
	"</id></feed>"
] | flatten | join("")
