const cutSpacingAlongX = 250;
const cutSpacingAlongY = 350;
const pipHalfWidth = cutSpacingAlongX / (6 * Math.sqrt(2));
const pipDesignWidth = 64;
const pipScaling = 2 * pipHalfWidth / pipDesignWidth;
const lefty = false;
const blueBack = false;
let cardCount = 0;

function matrixString(indexInD4, shiftX, shiftY, scaleX, scaleY = scaleX) {
	if (indexInD4 & 1) {
		scaleX *= -1;
		scaleY *= -1;
	}
	if (indexInD4 & 2) {
		scaleX *= -1;
	}
	const initArray = (
		indexInD4 & 4
		? [0, scaleX, scaleY, 0]
		: [scaleX, 0, 0, scaleY]
	);
	initArray.push(shiftX, shiftY);
	return `matrix(${initArray.join()})`;
}

const svg = document.documentElement;
const svgNS = svg.namespaceURI;

// type PipPrint = [string, number, number, number]
// type CardHalf = PipPrint[]

// pipElement: ([pipId, pipX, pipY, pipOri]: PipPrint) => SVGUseElement
function pipElement([pipId, pipX, pipY, pipOri]) {
	const use = document.createElementNS(svgNS, 'use');
	use.setAttribute('href', '#p' + pipId);
	use.setAttribute('transform', matrixString(
		pipOri,
		pipHalfWidth * (pipY + pipX - 1),
		pipHalfWidth * (pipY - pipX - 1),
		pipScaling
	));
	return use;
}

// cardElement: (cardHalf: CardHalf) => SVGGElement
function cardElement(cardHalf) {
	const g1 = document.createElementNS(svgNS, 'g');
	if (cardHalf[0][1] == 0 && cardHalf[0][2] == 0) {
		g1.append(pipElement(cardHalf.shift()));
	}
	if (cardHalf.length > 0) {
		const g2 = document.createElementNS(svgNS, 'g');
		cardHalf.forEach(p => g2.append(pipElement(p)));
		const g2Id = 'half_' + cardCount++;
		g2.setAttribute('id', g2Id);
		const use = document.createElementNS(svgNS, 'use');
		use.setAttribute('href', '#' + g2Id);
		use.setAttribute('transform', 'matrix(-1,0,0,-1,0,0)');
		g1.append(g2, use);
	}
	return g1;
}

const basicLayout = [
	[ 0,-2],
	[-1,-3,  1,-3],
	[-1,-3,  1,-3,  0,-2],
	[-1,-3,  1,-3, -1,-1,  1,-1],
	[-1,-3,  1,-3,  0,-2, -1,-1,  1,-1]
];

// pipCardHalves: (layout: number[][]) => (rank: number) => CardHalf
function pipCardHalves(pipId, layout, lefty, blueBack) {
	const normalOri = blueBack ? 7 : 0;
	const mirrorOri = blueBack ? 2 : 4;
	const centerPip = [pipId, 0, 0, mirrorOri];
	return rank => {
		const pips = [];
		const hasCenterPip = Boolean(rank & 1);
		if (hasCenterPip) {
			pips.push(centerPip);
			--rank;
		}
		const coords = (rank == 10)
			? basicLayout[4]
			: (rank == 0) ? [] : layout[(rank - 2) / 2];
		for (let i = 0; i < coords.length; i += 2) {
			let [x, y] = [coords[i], coords[i + 1]];
			if (lefty) {
				x *= -1;
			}
			if (blueBack && x == -1) {
				x = 1;
				y *= -1;
			}
			pips.push([pipId, x, y, (x == 0) ? mirrorOri : normalOri]);
		}
		return pips;
	};
}

const frenchCardHalves = Object.entries({
	'H': basicLayout,
	'D': [
		[ 1,-3],
		[ 1,-3, -1,-1],
		[ 1,-3, -1,-1,  1,-1],
		[ 1,-3,  0,-2, -1,-1,  1,-1]
	],
	'C': [
		[-1,-1],
		[ 0,-2, -1,-1],
		[-1,-3,  1,-3,  1,-1],
		[-1,-3,  1,-3,  0,-2,  1,-1]
	],
	'S': basicLayout
}).map(([k, v]) => pipCardHalves(k, v, lefty, blueBack));

svg.append(cardElement(frenchCardHalves[0](9)));

const batons = [
	[
		[],
		[1],
		[],
		[],
		[2],
		[],
		[],
		[4],
		[],
		[]
	],
	[
		[],
		[],
		[1],
		[],
		[],
		[2],
		[],
		[],
		[4],
		[]
	],
	[
		[],
		[],
		[],
		[1],
		[1],
		[1],
		[1, 2],
		[1, 2],
		[1, 2],
		[1, 2, 4]
	]
]
