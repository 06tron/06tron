;

function selectContent(selector, unnumbered = true) {
	const selected = new DOMParser().parseFromString(
		jsonFeed.items.map(x => x["content_html"]).join(""),
		"text/html"
	).querySelectorAll(selector);
	const main = document.createElement("main");
	if (selected.length == 1 || unnumbered) {
		selected.forEach(main.appendChild, main);
	} else {
		const h1 = document.createElement("h1");
		h1.textContent = selector;
		main.appendChild(h1);
		let i = 0;
		for (const element of selected) {
			const h2 = document.createElement("h2");
			h2.textContent = ++i;
			main.append(h2, element);
		}
	}
	return main;
}

function articleContent(articleId) {
	const feedItem = jsonFeed.items.at(-articleId);
	const main = document.createElement("main");
	const h1 = document.createElement("h1");
	h1.textContent = feedItem.title;
	main.appendChild(h1);
	main.insertAdjacentHTML("beforeend", feedItem["content_html"]);
	return main;
}

const urlParams = new URLSearchParams(window.location.search);
const articleId = Math.floor(urlParams.get("article"));

let isHome = false;
let main;

if (articleId > 0 && articleId <= jsonFeed.items.length) {
	main = articleContent(articleId);
} else {
	let selector = urlParams.get("s");
	if (selector === null) {
		isHome = true;
		selector = ".featured,#collage_619,#window_68f";
	}
	main = selectContent(selector, isHome);
}

const emailP = document.querySelector("body > p");

emailP.insertAdjacentElement("beforebegin", main);
if (!isHome) {
	document.querySelector("body > h1").remove();
	emailP.remove();
}
