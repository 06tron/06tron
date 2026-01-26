/**
 * https://www.desmos.com/calculator/xx23ttfmem
 * @param {[number, number]} startRay
 * @param {[number, number]} onRay
 * @param {[number, number]} startSeg
 * @param {[number, number]} endSeg
 * @returns {boolean}
 */
function rayIntersectsSegment(startRay, onRay, startSeg, endSeg) {
	const [ax, ay] = startRay;
	const [bx, by] = onRay;
	const [cx, cy] = startSeg;
	const [dx, dy] = endSeg;
	if (bx == ax) {
		if (dx == cx || ax < cx == ax < dx) {
			return false;
		}
		return 0 < (by - ay) * (cy - ay - (cx - ax) * (dy - cy) / (dx - cx));
	}
	const raySlope = (by - ay) / (bx - ax);
	if (cy - ay < raySlope * (cx - ax) == dy - ay < raySlope * (dx - ax)) {
		return false;
	}
	if (dx == cx) {
		return 0 < (bx - ax) * (dx - ax);
	}
	const segSlope = (dy - cy) / (dx - cx);
	return 0 < (bx - ax) * (segSlope - raySlope) * (segSlope * (cx - ax) - cy + ay);
}

/**
 * @param {[number, number][]} vts
 * @param {DOMPoint} onRay - The ray starts at the origin and
 * passes through this point.
 * @returns {[[number, number], [number, number]]} - An edge of
 * the polygon which intersects the ray, assuming that at least
 * one does. If the given vertices define a convex polygon with
 * the origin inside it, then exactly one side intersects most
 * given rays. If the ray passes exactly through a vertex then
 * this function may return an incorrect edge.
 */
function sideOfPolygonOnRay(vts, onRay) {
	for (let i = 0; i < vts.length - 1; ++i) {
		const startSide = vts[i];
		const endSide = vts[i + 1];
		if (rayIntersectsSegment([0, 0], [onRay.x, onRay.y], startSide, endSide)) {
			return [startSide, endSide];
		}
	}
	return [vts.at(-1), vts[0]];
}

/**
 * @param {[[number, number], [number, number]]} segmentOfReflectionLine
 * @returns {DOMMatrix}
 */
function reflectionMatrix(segmentOfReflectionLine) {
	const [[px, py], [qx, qy]] = segmentOfReflectionLine;
	let matrixInit;
	if (qx == px) {
		matrixInit = [-1, 0, 0, 1, 2 * px, 0];
	} else {
		const m = (qy - py) / (qx - px);
		const b = py - m * px;
		const d = 1 / (m * m + 1);
		matrixInit = [
			1 - m * m,
			2 * m,
			2 * m,
			m * m - 1,
			-2 * m * b,
			2 * b
		].map(e => e * d);
	}
	return new DOMMatrix(matrixInit);
}

/**
 * I should be able to use .invertSelf() instead of .inverse()
 * here, but .getScreenCTM() is returning an SVGMatrix instead
 * of a DOMMatrix.
 * @param {MouseEvent} mouseEvent - Has x and y attributes.
 * @param {SVGGraphicsElement} svgGE
 * @returns {DOMPoint}
 */
function svgMouseCoords(mouseEvent, svgGE) {
	const m = svgGE.getScreenCTM().inverse();
	// console.log(m);
	return DOMPoint.fromPoint(mouseEvent).matrixTransform(m);
}

/**
 * @param {[number, number]} p
 * @param {[number, number]} [q]
 * @returns {[number, number] | (r: number) => [number, number]}
 */
function add2D(p, q = null) {
	if (q === null) {
		return r => add2D(p, r);
	}
	return [p[0] + q[0], p[1] + q[1]];
}

/**
 * @param {string} vertexString - Optionally a JSON string
 * representation of an array of [number, number] elements. If
 * the string is not parsed as an array, then this function
 * returns null.
 * @returns {[number, number][] | null}
 */
function recenterPolygon(vertexString) {
	try {
		const vts = JSON.parse(vertexString);
		if (vts instanceof Array) {
			return vts.map(add2D(vts.reduce(add2D, [0, 0]).map(x => x / -vts.length)));
		}
	} catch {}
	return null;
}

/**
 * @param {number} n - Integer greater than 2.
 * @returns {[number, number][]}
 */
function regularPolygon(n) {
	const vts = [];
	const centerAngle = 2 * Math.PI / n;
	for (let i = 0; i < n; ++i) {
		vts.push([
			Math.cos(centerAngle * i),
			Math.sin(centerAngle * i)
		]);
	}
	return vts;
}

/**
 * @param {[number, number][]} vts
 * @returns {string} - Formatted to be assigned to the points
 * attribute of the SVG polygon element.
 */
function polygonToString(vts) {
	return vts.map(v => v.join(",")).join(" ");
}

/**
 * @param {DOMPoint} p
 * @returns {DOMMatrix}
 */
function translateTo(p) {
	return new DOMMatrix().translateSelf(p.x, p.y);
}

/**
 * @param {number | string} n 
 * @param {number | string} decimalPlaces 
 * @returns {number}
 */
function round(n, decimalPlaces) {
	let [base, power = 0] = n.toString().split("e");
	const d = Number(decimalPlaces);
	[base, power = 0] = Math.round(base + `e${+power + d}`).toString().split("e");
	return Number(base + `e${+power - d}`);
}

// Global Variables
const params = {
	animationFoldAngle: "0",
	borderColor: "CanvasText",
	closeAnimation: "4s ease-in-out alternate infinite close",
	decimalPlaces: "6",
	fillColor: "red",
	heightOfPolygon: "10",
	inlineStyle: "background-color:Canvas;color-scheme:light dark",
	marginSize: "keep",
	placeInitial: "no",
	selectedWidth: ".5",
	transformScene: "", // if no animation: SVG attribute form. if animation: CSS property form. if animation and custom margin: compatible with both SVG and CSS forms
	unselectedWidth: ".1",
	vertices: "5",
	xlinkHrefs: "false"
};
const scriptElement = document.getElementById("script");
const svg = scriptElement.parentElement;
scriptElement.outerHTML = `<metadata><about xmlns="https://6t.lt/about"><![CDATA[
Initially created at ${window.location.href.replaceAll(">", "%3E")}
Further explanation at https://home.6t.lt/?s=%23mirror_polygon_66c
]]></about></metadata>`; // replacing '>' to avoid inserting ']]>'
const useGroup = document.createElementNS(svg.namespaceURI, "g");
svg.insertAdjacentElement("afterbegin", useGroup);
let selected;
let pgUseElement;
let polygonVertices;

/**
 * @param {string} queryString
 */
function setParams(queryString) {
	const usp = new URLSearchParams(queryString);
	for (const [key, value] of Object.entries(params)) {
		params[key] = usp.get(key.charAt(0)) ?? value;
	}
	params.xlinkHrefs = ["true", "1"].includes(params.xlinkHrefs);
}

/**
 * @param {[number, number][]} vts - A [number, number] array
 * with at least one element.
 * @param {number} height
 * @returns {[number, number][]} - Point coordinates are rounded
 */
function scalePolygon(vts, height) {
	const [high, low] = vts.reduce(function ([hi, lo], [_, y]) {
		return [Math.max(hi, y), Math.min(lo, y)];
	}, [-Infinity, Infinity]);
	const scale = height / (high - low);
	return vts.map(v => v.map(x => round(x * scale, params.decimalPlaces)));
}

/**
 * @returns {[SVGGraphicsElement, [number, number][]]}
 */
function getBasePolygon() {
	const pg = document.createElementNS(svg.namespaceURI, "polygon");
	pg.setAttribute("id", "b");
	pg.setAttribute("fill", params.fillColor);
	pg.setAttribute("stroke", params.borderColor);
	const shape = recenterPolygon(params.vertices) ?? regularPolygon(+params.vertices);
	const vts = scalePolygon(shape, params.heightOfPolygon);
	pg.setAttribute("points", polygonToString(vts));
	const defs = document.createElementNS(svg.namespaceURI, "defs");
	defs.appendChild(pg);
	svg.insertAdjacentElement("afterbegin", defs);
	const use = document.createElementNS(svg.namespaceURI, "use");
	use.setAttribute("href", "#b");
	if (params.xlinkHrefs) {
		use.setAttribute("xlink:href", "#b");
	}
	return [use, vts];
}

/**
 * @param {SVGGraphicsElement} target
 */
function setSelected(target) {
	if (target === selected) {
		return;
	}
	if (svg !== target) {
		target.setAttribute("stroke-width", params.selectedWidth);
	}
	if (svg !== selected) {
		selected.removeAttribute("stroke-width");
	}
	selected = target;
}

const matrixIndices = "abcdef".split("");

/**
 * @param {DOMMatrix} matrix 
 * @returns {string}
 */
function getMatrixString(matrix) {
	const entries = matrixIndices.map(function (i) {
		return round(matrix[i], params.decimalPlaces);
	});
	return `matrix(${entries.join()})`;
}

/**
 * @param {DOMMatrix} matrix 
 * @returns {boolean}
 */
function positiveDeterminant(matrix) {
	const {a, b, c, d} = matrix;
	return a * d - c * b > 0;
}

/**
 * @param {DOMMatrix} baseMatrix
 * @param {[[number, number], [number, number]]} reflectSide
 * @param {DOMMatrix} [nextMatrix]
 * @returns {string}
 */
function getRotationString(baseMatrix, reflectSide, nextMatrix = null) {
	let [[ax, ay], [bx, by]] = reflectSide;
	if (!positiveDeterminant(baseMatrix)) {
		[[bx, by], [ax, ay]] = reflectSide;
	}
	const { x: cx, y: cy } = baseMatrix.transformPoint({ x: ax, y: ay });
	const { x: dx, y: dy } = baseMatrix.transformPoint({ x: bx, y: by });
	const currRad = Math.atan2(dy - cy, dx - cx);
	const currDeg = currRad * 180 / Math.PI;
	const toVert = new DOMMatrix().rotateSelf(90 - currDeg).translateSelf(-cx, -cy);
	const rotate3D = "rotateY(var(--a))" + getMatrixString(toVert);
	let fromVert;
	if (nextMatrix) {
		fromVert = nextMatrix.multiplySelf(toVert.invertSelf());
	} else {
		fromVert = toVert.invertSelf();
	}
	return getMatrixString(fromVert) + rotate3D;
}

/**
 * @param {DOMMatrix} matrix
 * @param {string} [aniCSS]
 */
function addPolygon(matrix, aniCSS = null) {
	const pg = pgUseElement.cloneNode();
	pg.setAttribute("transform", getMatrixString(matrix));
	if (aniCSS) {
		pg.dataset.ani = aniCSS;
	}
	useGroup.appendChild(pg);
	setSelected(pg);
}

/**
 * Deletes selected polygon, then selects its previous sibling.
 * If no polygon is selected, then the most recently created
 * polygon is selected.
 */
function deletePolygon() {
	let next;
	if (svg === selected) {
		next = useGroup.lastElementChild;
	} else {
		next = selected.previousElementSibling;
		selected.remove();
	}
	setSelected(next ?? svg);
}

/**
 * The function encodeURI does not escape the unreserved
 * characters listed on the following line.
 * A–Z a–z 0–9 - _ . ! ~ * ' ( )
 * The following reserved characters are also not escaped.
 * ; / ? : @ & = + $ ,
 * Finally, the character "#" is not escaped, but as it
 * indicates the beginning of a fragment identifier it is not
 * allowed in the data component of a data URI.
 * @param {string} xml
 */
function svgDataURI(xml) {
	return "data:image/svg+xml;charset=utf-8,%3C?xml%20version=%221.0%22%20encoding=%22utf-8%22?%3E" + encodeURI(xml).replaceAll("#", "%23");
}

/**
 * @param {Element} svgOut 
 */
function applyAnimation(svgOut, useGroupOut) {
	for (const pg of svgOut.querySelectorAll("[transform]")) {
		const baseTransform = pg.getAttribute("transform");
		pg.removeAttribute("transform");
		const topTransform = params.transformScene + (pg.dataset.ani ?? "");
		delete pg.dataset.ani;
		pg.setAttribute("style", "transform:" + topTransform + baseTransform);
	}
	const style = document.createElementNS(svg.namespaceURI, "style");
	style.textContent = `
@property --a {
	syntax: "<angle>";
	inherits: true;
	initial-value: 0deg;
}
@keyframes close {
	from { --a: 0deg; }
	to { --a: ${+params.animationFoldAngle}deg; }
}`;
	svgOut.insertAdjacentElement("afterbegin", style);
	useGroupOut.removeAttribute("transform");
	useGroupOut.setAttribute("style", "animation:" + params.closeAnimation);
}

setParams(window.location.search);
useGroup.setAttribute("stroke-width", params.unselectedWidth);
if (params.xlinkHrefs) {
	useGroup.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink");
}
svg.setAttribute("style", params.inlineStyle);
selected = svg;
[pgUseElement, polygonVertices] = getBasePolygon();
svg.addEventListener("mousedown", function (event) {
	if (event.shiftKey) {
		setSelected(event.target);
		return;
	}
	const click = svgMouseCoords(event, selected);
	if (selected === svg) {
		addPolygon(translateTo(click));
		return;
	}
	const reflectSide = sideOfPolygonOnRay(polygonVertices, click);
	const parentMatrix = selected.transform.baseVal.getItem(0).matrix;
	const childMatrix = reflectionMatrix(reflectSide).preMultiplySelf(parentMatrix);
	if (params.animationFoldAngle == 0) {
		addPolygon(childMatrix);
		return;
	}
	let aniCSS = selected.dataset.ani;
	if (!aniCSS) {
		addPolygon(childMatrix, getRotationString(childMatrix, reflectSide));
		return;
	}
	const [prefixAniCSS, nextMatrixString] = aniCSS.split(/(?=matrix\([-\d.,]*\)$)/);
	const nextMatrix = new DOMMatrix(nextMatrixString);
	const suffixAniCSS = getRotationString(childMatrix, reflectSide, nextMatrix);
	addPolygon(childMatrix, prefixAniCSS + suffixAniCSS);
});
svg.addEventListener("keydown", function (event) {
	switch (event.key) {
		case "Backspace":
		case "Delete":
			deletePolygon();
			break;
		case "c":
		case "C":
			if (event.ctrlKey || event.metaKey) {
				const svgOut = svg.cloneNode(true);
				const useGroupOut = svgOut.querySelector("g");
				svgOut.removeAttribute("cursor");
				if (params.transformScene.length > 0) {
					useGroupOut.setAttribute("transform", params.transformScene);
				}
				if (params.marginSize != "keep") {
					const gTemp = document.createElementNS(svg.namespaceURI, "g");
					gTemp.appendChild(useGroupOut.cloneNode(true));
					svg.appendChild(gTemp);
					const b = gTemp.getBBox();
					svg.removeChild(gTemp);
					const m = +params.marginSize;
					svgOut.setAttribute("viewBox", [
						b.x - m,
						b.y - m,
						b.width + 2 * m,
						b.height + 2 * m
					].map(x => round(x, params.decimalPlaces)).join());
				}
				if (params.animationFoldAngle != 0) {
					applyAnimation(svgOut, useGroupOut);
				}
				const dataURI = svgDataURI(svgOut.outerHTML);
				navigator.clipboard?.writeText(dataURI).catch(function (err) {
					alert(dataURI);
					console.log(err);
				}) ?? alert(dataURI);
			}
			break;
		case "F3":
			console.log(useGroup.children.length);
	}
});
if (params.placeInitial != "no") {
	const p = {};
	[p.x, p.y] = params.placeInitial.split(",").map(Number);
	addPolygon(translateTo(p));
}
