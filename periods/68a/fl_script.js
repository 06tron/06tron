// Edits this array to fit the given size, trimming or padding with the given element if necessary.
Array.prototype.fit = function (size, padElement) {
	for (let i = this.length; i < size; ++i) {
		this[i] = padElement;
	}
	this.length = size;
	return this;
};

// Starting at a specified index, replace the elements of this array with the elements of the given array. The length of this array remains unchanged.
Array.prototype.overlay = function (top, start) {
	for (let i = start; i < this.length && i - start < top.length; ++i) {
		this[i] = top[i - start];
	}
	return this;
};

let mouseDown = false;
let highlight = "";
const page = document.getElementById("page");
let pageWidth = 18;
const form = document.getElementById("form");
let formWidth = 1;
const sel = window.getSelection();
const selPath = document.getElementById("block");
const pageSVG = document.getElementById("backing");
const copyButton = document.getElementById("copy");
const pasteButton = document.getElementById("paste");
const operations = {
	" ": [" ", " ", " ", " "],
    "┑": ["┘", "┏", "┚", "┍"],
    "┘": ["┖", "┖", "└", "└"],
	"┖": ["┏", "┘", "┍", "┚"],
	"┏": ["┑", "┑", "┓", "┓"],
	"╺": ["╷", "╸", "╻", "╸"],
	"╸": ["╵", "╺", "╹", "╺"],
	"╷": ["╴", "╻", "╴", "╷"],
	"╻": ["╸", "╷", "╸", "╻"],
	"╴": ["╹", "╶", "╵", "╶"],
	"╶": ["╻", "╴", "╷", "╴"],
	"╹": ["╺", "╵", "╺", "╹"],
	"╵": ["╶", "╹", "╶", "╵"],
	"┝": ["┬", "┫", "┰", "┥"],
	"┫": ["┷", "┝", "┻", "┣"],
	"┬": ["┨", "┰", "┤", "┬"],
	"┰": ["┫", "┬", "┥", "┰"],
	"┨": ["┻", "├", "┷", "┠"],
	"├": ["┰", "┨", "┬", "┤"],
	"┻": ["┝", "┷", "┣", "┻"],
	"┷": ["├", "┻", "┠", "┷"],
	"─": ["┃", "─", "│", "─"],
	"┃": ["━", "│", "━", "┃"],
	"━": ["│", "━", "┃", "━"],
	"│": ["─", "┃", "─", "│"]
};

// // all elements of 'lines' must be arrays of individual characters with the same length
function newBoxBlock(charRows) {
	return {
		rows: charRows.length,
		cols: charRows[0].length,
		get: function (r, c, op = -1) {
			return op < 0 ? charRows[r][c] : operations[charRows[r][c]][op];
		},
		getRow: r => charRows[r],
		toString: () => charRows.map(l => l.join("")).join("\n")
	};
}

// Splits a single string into lines delimited by the newline character U+0A, and splits each line into individual unicode code points. The lines are trimmed or padded with the space character U+20 so that each line is represented by an array of length equal to the given width.
function textToCharRows(text, width) {
	return text.split("\n").map(line => [...line].fit(width, " "));
}

// 
function formToPage(row, col) {
	const pageLines = textToCharRows(page.textContent, pageWidth);
	if (col < pageWidth) {
		const bb = newBoxBlock(textToCharRows(form.textContent, formWidth));
		const emptyLine = new Array(pageWidth).fill(" ");
		for (let r = row; r - row < bb.rows; ++r) {
			if (r == pageLines.length) {
				pageLines.push(Array.from(emptyLine));
			}
			pageLines[r].overlay(bb.getRow(r - row), col);
		}
	}
	page.textContent = newBoxBlock(pageLines).toString();
}

// Rotates a BoxBlock one quarter turn clockwise. The first row will become the far right column.
function bbRotate(bb, granjon = true) {
	const rotated = [];
	for (let c = 0; c < bb.cols; ++c) {
		rotated.push([]);
		for (let r = bb.rows - 1; r >= 0; --r) {
			rotated[c].push(bb.get(r, c, granjon ? 0 : 2));
		}
	}
	return newBoxBlock(rotated);
}

// Reflects a BoxBlock horizontally, reversing the order of elements in each row.
function bbReflect(bb, granjon = true) {
	const reflected = [];
	for (let r = 0; r < bb.rows; ++r) {
		reflected.push([]);
		for (let c = bb.cols - 1; c >= 0; --c) {
			reflected[r].push(bb.get(r, c, granjon ? 1 : 3));
		}
	}
	return newBoxBlock(reflected);
}

// The current selection is invalid or out of bounds if it is empty or either of its endpoints are outside of the page.
function selOB() {
	return !sel.anchorNode || !sel.focusNode
		|| sel.anchorNode.parentNode !== page
		|| sel.focusNode.parentNode !== page
		|| sel.toString() === "";
}

// Returns the two given variables in non-decreasing order.
function ascPair(a, b) {
	return a < b ? [a, b] : [b, a];
}

// Using the two endpoints of the user text selection, find the top and bottom rows and the left and right columns of the corresponding block selection. Assumes selOB() is false.
function selEdges() {
	const [i1, i2] = ascPair(sel.anchorOffset, sel.focusOffset);
	const lines1 = page.textContent.slice(0, i1).split("\n");
	const lines2 = page.textContent.slice(i1, i2).split("\n");
	const rTop = lines1.length - 1;
	const rBot = rTop + lines2.length - 1;
	const cTop = [...lines1.at(-1)].length;
	const cBot = [...lines2.at(-1)].length;
	const [cLeft, cRight] = rTop != rBot ? ascPair(cTop, cBot) : [cTop, cTop + cBot];
	return [rTop, rBot, cLeft, cRight];
}

// If the changed selection is in bounds, then update the background SVG to show the corresponding block selection.
document.addEventListener("selectionchange", function () {
	if (selOB()) {
		return;
	}
	const [r1, r2, c1, c2] = selEdges();
	selPath.setAttribute("d", `M${c1},${r1}H${c2}V${r2 + 1}H${c1}Z`);
});

function setForm(bb) {
	form.textContent = bb.toString();
	formWidth = bb.cols;
	form.style.setProperty("font-size", `${(30 / Math.max(bb.cols, bb.rows)).toFixed(4)}vw`);
}

// Removes the SVG highlighting of the current selection, and if the selection is in bounds then copy the selected block of text from the page into the form.
function finishSelecting() {
	selPath.setAttribute("d", "");
	if (selOB()) {
		return;
	}
	const [r1, r2, c1, c2] = selEdges();
	const pageLines = textToCharRows(page.textContent, pageWidth);
	const formLines = new Array(r2 - r1 + 1);
	for (let r = 0; r < formLines.length; ++r) {
		formLines[r] = pageLines[r1 + r].slice(c1, c2);
	}
	setForm(newBoxBlock(formLines));
	page.textContent = newBoxBlock(pageLines).toString();
	sel.removeAllRanges();
}

// Run finishSelecting() when either the mouse or the shift key is released. The user can select text by clicking and dragging, or by using the arrow keys while holding shift. 
document.addEventListener("mouseup", finishSelecting);
document.addEventListener("keyup", function (event) {
	if (event.key == "Shift") {
		finishSelecting();
	}
});

document.addEventListener("keydown", function (event) {
	if (event.key == "k" || event.key == "l") {
		const bbForm = newBoxBlock(textToCharRows(form.textContent, formWidth));
		form.textContent = (event.key == "k" ? bbRotate : bbReflect)(bbForm).toString();
	}
});

copyButton.addEventListener("mousedown", function () {
	navigator.clipboard.writeText(page.textContent.replace(/ +\n| +$/g, "\n"));
});

pasteButton.addEventListener("mousedown", function () {
	navigator.clipboard.readText().then(function (text) {
		let width = 1;
		for (line of text.split("\n")) {
			width = Math.max(width, [...line].length);
		}
		setForm(newBoxBlock(textToCharRows(text, width)));
	});
});
