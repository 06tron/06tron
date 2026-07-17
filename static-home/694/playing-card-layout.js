const pipSize = 2**13;
const columnOverlap = pipSize * (3 - 20/7);

function pipOrigin(pipRow, pipCol, cardRow, cardCol, mirror) {
	if (mirror) {
		pipCol *= -1;
		cardCol *= -1;
	}
	return [
		pipSize * (cardRow*4 + cardCol*3 + pipRow + pipCol) - cardCol*columnOverlap,
		pipSize * (cardRow*4 - cardCol*3 + pipRow - pipCol) + cardCol*columnOverlap
	];
}

const svg = document.documentElement;
const svgNS = svg.namespaceURI;

function pipElement(pipId, pipRow, pipCol, cardRow, cardCol, mirror) {
	const use = document.createElementNS(svgNS, 'use');
	use.setAttribute('href', '#p' + pipId);
	let [pipX, pipY] = pipOrigin(pipRow, pipCol, cardRow, cardCol, mirror);
	if (mirror) {
		use.setAttribute('transform', 'matrix(0,1,1,0,0,0)');
	}
	use.setAttribute('x', pipX);
	use.setAttribute('y', pipY);
	return use;
}

const pipRows = [0, 0, 0.5, 1, 1];
const lefty = false;
const pipCols = lefty ? [1, 0, 0.5, 1, 0] : [0, 1, 0.5, 0, 1]; 

function cardElement(pipId, pipPlacement, cardRow, cardCol, odd) {
	const g1 = document.createElementNS(svgNS, 'g');
	if (pipPlacement.length > 0) {
		const g2 = document.createElementNS(svgNS, 'g');
		for (let i = 0; i < pipPlacement.length; ++i) {
			const pipRow = pipRows[pipPlacement[i]];
			const pipCol = pipCols[pipPlacement[i]];
			const mirror = pipPlacement[i] == 2;
			g2.append(pipElement(pipId, pipRow, pipCol, cardRow, cardCol, mirror));
		}
		const g2Id = `top_${cardRow}_${cardCol}`;
		g2.setAttribute('id', g2Id);
		const use = document.createElementNS(svgNS, 'use');
		use.setAttribute('href', '#' + g2Id);
		use.setAttribute('transform', 'matrix(-1,0,0,-1,0,0)');
		use.setAttribute('x', -2 * (pipSize * (cardRow*4 + cardCol*3 + 2.5) - cardCol*columnOverlap));
		use.setAttribute('y', -2 * (pipSize * (cardRow*4 - cardCol*3 + 1.5) + cardCol*columnOverlap));
		g1.append(g2, use);
	}
	if (odd) {
		g1.append(pipElement(pipId, 1.5, 0.5, cardRow, cardCol, true));
	}
	return g1;
}

const pipIds = ['H', 'D', 'C', 'S'];

const layouts = [
	[
		[2],
		[0, 1],
		[0, 1, 2],
		[0, 1, 3, 4]
	],
	[
		[1],
		[1, 3],
		[1, 3, 4],
		[1, 2, 3, 4]
	],
	[
		[3],
		[2, 3],
		[0, 1, 4],
		[0, 1, 2, 4]
	],
	[
		[2],
		[0, 1],
		[0, 1, 2],
		[0, 1, 3, 4]
	]
];

for (let cardRow = 0; cardRow < layouts.length; ++cardRow) {
	let cardCol = -cardRow;
	svg.append(cardElement(pipIds[cardRow], [], cardRow, cardCol++, true));
	while (cardCol + cardRow != 9) {
		const layout = layouts[cardRow][(cardCol+cardRow-1)/2];
		svg.append(cardElement(pipIds[cardRow], layout, cardRow, cardCol++, false));
		svg.append(cardElement(pipIds[cardRow], layout, cardRow, cardCol++, true));
	}
	svg.append(cardElement(pipIds[cardRow], [0, 1, 2, 3, 4], cardRow, cardCol, false));
}
