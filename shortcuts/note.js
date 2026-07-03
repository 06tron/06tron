const note = document.getElementById("note");
const notice = document.getElementById("notice");
let noClipboard = false;
if (!(location.protocol === "data:" || new URLSearchParams(location.search).get("no-title") === null)) {
	note.replaceChildren();
}
if (!note.isContentEditable) {
	note.contentEditable = "true";
}
note.focus();
document.addEventListener("keydown", function (event) {
	if (event.altKey) {
		note.style.whiteSpace = (note.style.whiteSpace == "pre") ? "pre-wrap" : "pre";
		return;
	}
	if (event.key.toLowerCase() != "c") {
		return;
	}
	if (!(event.ctrlKey || event.metaKey)) {
		return;
	}
	if (window.getSelection().toString().length != 0) {
		return;
	}
	const txt = "data:text/plain;charset=utf-8," + encodeURI(note.textContent).replaceAll("#", "%23");
	if (!navigator.clipboard || noClipboard) {
		let a;
		if (notice.children.length === 0) {
			notice.replaceChildren();
			a = document.createElement("a");
			a.textContent = "Copy this link to a data URI";
			notice.appendChild(a);
			notice.style.opacity = "1";
			notice.style.zIndex = "1";
			noClipboard = true;
		} else {
			a = notice.children[0];
		}
		a.setAttribute("href", txt);
		return;
	}
	navigator.clipboard.writeText(txt);
	notice.style.opacity = "1";
	setTimeout(function () {
		notice.style.opacity = "0";
	}, 1800);
});

function replaceNote() {
	note.textContent = "data:text/html;charset=utf-8,%3C!DOCTYPE%20html%3E"
		+ encodeURI(document.documentElement.outerHTML).replaceAll("#", "%23");
}
