; // the variable 'jsonFeed' containing the contents of feed.json will be added by rebuild.sh

function getItemHTML(selector, verbose, relativeLinks) {
	let fullHTML = jsonFeed.items.reduce(function (acc, { content_html }) {
		return acc + content_html;
	}, "");
	if (relativeLinks) {
		fullHTML = fullHTML.replaceAll('="https://home.6t.lt/', '="./');
	}
	const doc = new DOMParser().parseFromString(fullHTML, "text/html");
	const selected = doc.querySelectorAll(selector);
	const target = doc.createElement("div");
	if (verbose) {
		if (selected.length == 1) {
			target.appendChild(selected[0]);
		} else {
			target.insertAdjacentHTML("afterbegin", `<h1>${selector}</h1>`);
			let i = 0;
			for (const element of selected) {
				target.insertAdjacentHTML("beforeend", `<h2>${(++i).toString()}</h2>`);
				target.appendChild(element);
			}
		}
	} else {
		for (const element of selected) {
			target.appendChild(element);
		}
	}
	return target.innerHTML;
}

const urlParams = new URLSearchParams(window.location.search);
const articleId = Math.floor(urlParams.get("article"));
let main;

if (articleId > 0 && articleId <= jsonFeed.items.length) {
	const item = jsonFeed.items.at(-articleId);
	main = `<h1>${item.title}</h1>${item.content_html}`;
	document.body.removeChild(document.getElementById("intro"));
	document.body.removeChild(document.getElementById("contact"));
} else {
	let verbose = true;
	let selector = urlParams.get("s");
	if (selector === null) {
		verbose = false;
		selector = ".featured,#collage_619,#window_68f";
	} else {
		document.body.removeChild(document.getElementById("intro"));
		document.body.removeChild(document.getElementById("contact"));
	}
	main = getItemHTML(selector, verbose, true);
}

document.getElementById("content").innerHTML = main;
