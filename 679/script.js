const defaultCharMap = `&"><'%X\tZ\n$~()*@`;
const query = new URLSearchParams(window.location.search);

String.prototype.slashEscaped = function () {
	return JSON.stringify(this).slice(1, -1).replace(/\\"/g, '"');
};

String.prototype.pullNumberArray = function () {
	return (this.match(/-?(?:\d*\.)?\d+(?:[eE]-?\d+)?/g) ?? []).map(Number);
};

function shortNumberString(n) {
	const parts = n.toString().match(/^\+?(-?)0*(\d*)\.?(\d*)e?(.*)/);
	let power = Number(parts[4]) - parts[3].length;
	const a = parts[2] + parts[3];
	const b = a.replace(/0+$/, "");
	if (b.length == 0) {
		return "0";
	}
	power += a.length - b.length;
	const intPart = b.replace(/^0+/, "");
	// At this point we have converted a nonzero number to an integer part,
	// which has no leading or trailing zeros, multiplied by 10 to the integer
	// variable 'power'.
	if (0 <= power && power <= 2) {
		return parts[1] + intPart + "0".repeat(power);
	}
	if (-intPart.length <= power && power <= -1) {
		const dotLoc = intPart.length + power;
		return parts[1] + intPart.slice(0, dotLoc) + "." + intPart.slice(dotLoc);
	}
	if (power == -intPart.length - 1) {
		return parts[1] + ".0" + intPart;
	}
	return parts[1] + intPart + "e" + power.toString();
}

function numberCSV(...numbers) {
	return numbers.map(shortNumberString).join();
}

const stringFunctions = {
	toWebpage: ["HTML to Webpage", defaultCharMap.slashEscaped(), "(leave blank for default character swapping map)", function (arg, fellback) {
		if (fellback) {
			return "https://6t.lt?h=" + this.charSwap(defaultCharMap).toQueryValue();
		}
		return `https://6t.lt?m=${arg.toQueryValue()}&h=${this.charSwap(arg).toQueryValue()}`;
	}],
	getNumbers: ["Retrieve Numbers", ",", "(separator)", function (arg) {
		return this.pullNumberArray().join(arg);
	}],
	getPolygonPath: ["Convert to SVG Polygon Path", "Unused", "", function () {
		const numbers = this.pullNumberArray();
		if (numbers.length < 6) {
			return "Not enough numbers to generate a polygon path.";
		}
		let path = 'd="M' + numberCSV(numbers[0], numbers[1]);
		for (let i = 2; i < numbers.length - 1; i += 2) {
			const ax = numbers[i - 2];
			const ay = numbers[i - 1];
			const bx = numbers[i];
			const by = numbers[i + 1];
			const hChange = ax != bx;
			const vChange = ay != by;
			if (hChange && vChange) {
				const abs = numberCSV(bx, by);
				const rel = numberCSV(bx - ax, by - ay);
				path += abs.length > rel.length ? "l" + rel : "L" + abs;
			} else if (hChange) {
				const abs = numberCSV(bx);
				const rel = numberCSV(bx - ax);
				path += abs.length > rel.length ? "h" + rel : "H" + abs;
			} else if (vChange) {
				const abs = numberCSV(by);
				const rel = numberCSV(by - ay);
				path += abs.length > rel.length ? "v" + rel : "V" + abs;
			}
		}
		return path + 'Z"';
	}],
	noIndentation: ["Remove Newlines and Tabs", "Unused", "", function () {
		return this.replace(/[\n\r\t]/g, "");
	}],
	charSwap: ["Character Swap", "7>5<(S)T", "(reflective mapping)", function (arg) {
		const mapMatch = new RegExp(`[${arg.replace(/[\\^\]-]/g, "\\$&")}]`, "g"); // some characters need to be escaped in regex character class
		return this.replace(mapMatch, function (char) {
			return arg.charAt(arg.length - arg.indexOf(char) - 1);
		});
	}],
	toScriptVar: ["Assign to ES Variable", "Unused", "", function () {
		const rep = `let str = ${JSON.stringify(this)};`;
		if (!/\\/.test(rep)) { // no escapes were necessary
			return rep;
		}
		if (!/\\[^"]|'/.test(rep)) { // only double quotes were escaped, and there are no single quotes
			return `let str = '${this}';`;
		}
		if (!/\\[^"]|`|\${/.test(rep)) { // only double quotes were escaped, and there are no backticks or "${"
			return `let str = \`${this}\`;`;
		}
		return rep;
	}],
	toDataURI: ["Create Data URI", "text/plain;charset=UTF-8", "(media type with parameters)", function (arg) {
		return `data:${arg},${encodeURI(this).replaceAll("#", "%23")}`;
	}],
	toQueryValue: ["Encode Query Value", "Unused", "", function () {
		return encodeURI(this).replace(/[#&'+]|%20/g, function (char) {
			return { "#": "%23", "&": "%26", "'": "%27", "+": "%2B", "%20": "+" }[char];
		});
	}]
};

const inputArea = document.getElementById("input");
const outputArea = document.getElementById("output");
const functionSelect = document.getElementById("choose-function");
const argInput = document.getElementById("modifier");
const argDesc = document.getElementById("modifier-desc");
const urlInput = document.getElementById("web-input");
const copyButton = document.getElementById("copy");

if (query.get("f") != null) {
	try {
		stringFunctions.userFunction = [
			query.get("f-name") ?? "Custom Function",
			query.get("a") ?? "Unspecified",
			query.get("a-hint") ?? "",
			new Function("arg, fellback", query.get("f"))
		];
	} catch (error) {
		inputArea.value = "Failed to parse 'f' parameter: " + error.message;
	}
}

for (const [key, val] of Object.entries(stringFunctions)) {
	String.prototype[key] = val[3];
	functionSelect.insertAdjacentHTML("afterbegin", `<option value="${key}">${val[0]}</option>`);
}
functionSelect.value = functionSelect.firstChild.value;

document.getElementById("apply-function").addEventListener("mousedown", function () {
	if (!inputArea.value) {
		inputArea.value = '<p style="color: #E97">✿</p>';
	}
	const key = functionSelect.value;
	const arg = argInput.value || stringFunctions[key][1];
	outputArea.value = inputArea.value[key](arg, !argInput.value);
});

function setArgHint() {
	const val = stringFunctions[functionSelect.value];
	argInput.value = "";
	argInput.placeholder = val[1];
	argDesc.innerText = val[2];
}

setArgHint();
functionSelect.addEventListener("change", setArgHint);

urlInput.addEventListener("keydown", async function (event) {
	if (event.key == "Enter") {
		try {
			const res = await fetch(urlInput.value);
			if (!res.ok) {
				throw new Error("response status: " + res.status);
			}
			inputArea.value = await res.text();
		} catch (error) {
			inputArea.value = "Failed to retrieve input from URL. " + error.message;
		}
	}
});

copyButton.addEventListener("mousedown", function () {
	navigator.clipboard.writeText(outputArea.value);
	copyButton.innerText = "Copied!";
	setTimeout(function () {
		copyButton.innerText = "Copy to Clipboard";
	}, 1200);
});

document.getElementById("move").addEventListener("mousedown", function () {
	inputArea.value = outputArea.value;
	outputArea.value = "";
});
