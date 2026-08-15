; // the variable 'jsonFeed' containing the contents of feed.json will be added by rebuild.sh

function getItemHTML(selector, verbose, relativeLinks) {
	let fullHTML = jsonFeed.items.reduce(function (acc, { content_html }) {
		return acc + content_html;
	}, "");
	if (relativeLinks) {
		fullHTML = fullHTML.replace(/=("|')https:\/\/home.6t.lt\//g, '=$1./');
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
let selector = urlParams.get('s');

if (articleId > 0 && articleId <= jsonFeed.items.length) {
	const item = jsonFeed.items.at(-articleId);
	main = `<h1>${item.title}</h1>${item.content_html}`;
	selector = null;
} else if (selector === null) {
	main = getItemHTML('.featured,#collage_619,#window_68f', false, true);
} else {
	main = getItemHTML(selector, true, true);
}

if (selector !== null) {
	document
		.querySelectorAll('[id^="home.6t.lt_"]')
		.forEach(document.body.removeChild, document.body);
}

document.querySelector('main').innerHTML = main;
