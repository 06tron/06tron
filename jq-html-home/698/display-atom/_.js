const main = document.querySelector("body > main");

function display(feedElement) {
	try {
		feedElement.querySelectorAll("[type='html']").forEach(a => {
			const div = document.createElement("div");
			Document.parseHTMLUnsafe(a.textContent).body.childNodes.forEach(div.appendChild, div);
			a.replaceChildren(div);
		});
		main.replaceChildren(feedElement);
	} catch (ex) {
		main.textContent = ex.message;
	}
}

function load(feedURL = "https://home.6t.lt/atom.xml") {
	const req = new XMLHttpRequest();
	req.onload = () => display(req.responseXML.documentElement);
	req.open("GET", feedURL);
	req.send();
}

load();
