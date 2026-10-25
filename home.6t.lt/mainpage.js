;

/**
 * Concatenates elements selected from the combined HTML content of the [JSON Feed]{@link https://www.jsonfeed.org/version/1.1/}.
 * @param {string} selector - A CSS selector passed to [querySelectorAll()]{@link https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelectorAll}.
 * @param {boolean} unnumbered - Ensures that the selected elements will be output without additional numbering.
 * @returns {HTMLElement} A <main> element with the selected elements inserted as children. Some URLs are converted to relative links. Numbering in the form of <h2> headings is added by default, along with an <h1> containing the selector used. These additional elements are omitted if an ID selector matching the regex is passed.
 */
function selectContent(selector, unnumbered = false) {
	const selected = new DOMParser().parseFromString(
		jsonFeed.items.map(x => x["content_html"]).join(""),
		"text/html"
	).querySelectorAll(selector);
	const main = document.createElement("main");
	if (unnumbered || /^#\w+$/.test(selector)) {
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
	for (const a of main.querySelectorAll("a[href^='https://home.6t.lt/']")) {
		a.href = "." + a.href.slice(18);
	}
	for (const e of main.querySelectorAll(":is(iframe,img)[src^='https://home.6t.lt/']")) {
		e.src = "." + e.src.slice(18);
	}
	return main;
}

/**
 * Selects a single item from the JSON Feed.
 * @param {number} itemId - Index of the item, starting at 1, from oldest to newest.
 * @returns {HTMLElement} A <main> element containing an <h1> with the specified item's title followed by all of its HTML content. No relative links are created.
 */
function itemContent(itemId) {
	const feedItem = jsonFeed.items.at(-itemId);
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
	main = itemContent(articleId);
} else {
	let selector = urlParams.get("s");
	if (selector === null) {
		isHome = true;
		selector = ".featured,#collage_619,#window_68f";
	}
	main = selectContent(selector, isHome);
}

const footer = document.querySelector("article > footer");

footer.insertAdjacentElement("beforebegin", main);
if (!isHome) {
	document.querySelector("article > h1").remove();
	footer.children[0].remove();
}

/**
 * @returns An object containing properties to be added to a <time> element. The property values are a hexadecimal representation of the current mebisecond truncated to one radix place, and two date string representations of the current mebisecond's start.
 */
function timeTemporal() {
	const ms = Temporal.Now.instant().epochMilliseconds;
	const hex = Math.floor(ms / 65536e3).toString(16);
	const unit = 1048576e3;
	const start = Temporal.Instant.fromEpochMilliseconds(Math.floor(ms / unit) * unit);
	return {
		textContent: hex.slice(0, -1) + "." + hex.slice(-1),
		dateTime: start.toString(),
		title: start.toLocaleString()
	};
}

function timeDate() {
	const ms = Date.now();
	const hex = Math.floor(ms / 65536e3).toString(16);
	const unit = 1048576e3;
	const start = new Date(Math.floor(ms / unit) * unit);
	return {
		textContent: hex.slice(0, -1) + "." + hex.slice(-1),
		dateTime: date.toISOString(),
		title: start.toString()
	};
}

Object.assign(
	document.querySelector("#shared_top > time"),
	typeof Temporal !== "undefined" ? timeTemporal() : timeDate()
);
