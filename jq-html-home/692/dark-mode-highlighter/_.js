//<![CDATA[

String.prototype.pullNumberArray = function () {
	return (this.match(/-?(?:\d*\.)?\d+(?:[eE]-?\d+)?/g) ?? []).map(Number);
};

// components are 3 or 4 integers >= 0 and <= 255
function colorString(components) {
	const c = components[3] == 255 ? components.slice(0, -1) : components.slice();
	const hex = [];
	let shortHex = true;
	let useRGB = false;
	for (let i = 0; i < c.length; ++i) {
		if (c[i] < 0 || c[i] > 255) {
			useRGB = true;
			break;
		}
		hex.push(c[i].toString(16).padStart(2, "0"));
		if (hex[i][0] != hex[i][1]) {
			shortHex = false;
		}
	}
	if (useRGB) {
		if (c.length < 4) {
			return `rgb(${c.join(", ")})`;
		}
		c[3] = (c[3] / 255).toFixed(3);
		return `rgba(${c.join(", ")})`;
	}
	return "#" + (shortHex ? hex.map(x => x[0]) : hex).join("");
}

const colorIn = document.getElementById("start-color");
const alphaIn = document.getElementById("target-alpha");
const startRenderedStyle = window.getComputedStyle(document.getElementById("start-rendered"));
const newRenderedStyle = window.getComputedStyle(document.getElementById("new-rendered"));
const parsedValOut = document.getElementById("parsed-val");
const parsedHexOut = document.getElementById("parsed-hex");
const parsedNewOut = document.getElementById("parsed-new");
const alphaIntOut = document.getElementById("alpha-int");
const alphaDecOut = document.getElementById("alpha-dec");
const colorOut = document.getElementById("new-hex");
const styleVars = document.getElementById("style-vars").style;

function updateColor() {
	styleVars.setProperty("--start-color", colorIn.value);
	const computedColor = startRenderedStyle.backgroundColor;
	parsedValOut.textContent = computedColor;
	alphaIntOut.textContent = alphaIn.value;
	let startRGBA = computedColor.pullNumberArray();
	const sAlpha = startRGBA[3] ?? 1;
	startRGBA[3] = sAlpha;
	if (computedColor.startsWith("color")) {
		startRGBA = startRGBA.map(x => Math.round(x * 255));
	} else {
		startRGBA[3] = Math.round(startRGBA[3] * 255);
	}
	parsedHexOut.textContent = colorString(startRGBA);
	const newRGBA = new Array(4);
	newRGBA[3] = Number(alphaIn.value);
	const tAlpha = newRGBA[3] / 255;
	alphaDecOut.textContent = tAlpha.toFixed(3);
	// let error = 0;
	for (let i = 0; i < 3; ++i) {
		const ideal = (startRGBA[i] * sAlpha + 255 * (tAlpha - sAlpha)) / tAlpha;
		newRGBA[i] = Math.round(ideal);
		// error += Math.abs(ideal - Math.max(0, Math.min(newRGBA[i], 255)));
	}
	const newHex = colorString(newRGBA);
	styleVars.setProperty("--new-color", newHex);
	parsedNewOut.textContent = newRenderedStyle.backgroundColor;
	colorOut.textContent = newHex;
}

document.getElementById("desc").textContent = document.querySelector('meta[name="description"]').content;
updateColor();

//]]>
