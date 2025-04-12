
const rT = [[1,1],[4,1],[5,2],[5,6],[4,6],[4,2],[2,2],[2,6],[1,6]];
const rB = [[1,0],[5,0],[4,1],[5,5],[4,5],[3,1],[2,1],[2,5],[1,5]];
const mL = [[1,1],[3,1],[6,3],[6,4],[3,2],[2,2],[2,5],[1,5]];
const mR = [[5,1],[3,1],[0,3],[0,4],[3,2],[4,2],[4,5],[5,5]];
const cT = [[1,6],[1,2],[2,1],[4,1],[5,2],[5,3],[4,3],[4,2],[2,2],[2,6]];
const cB = [[1,0],[1,4],[2,5],[4,5],[5,4],[5,3],[4,3],[4,4],[2,4],[2,0]];
const P_0 = [
	[0,866],
	[500,866],
	[0,1200],
	[208,1182],
	[0,1260],
	[55,1259], // 5
	[110,1255],
	[28,1280],
	[84,1277],
	[568,1091],
	[630,1091], // 10
	[582,1118],
	[605,1117],
	[616,1122],
	[632,1113],
	[645,1117] // 15
];

function generateP(first) {
	const P = [first]
	for (let i = 1; i < 12; ++i) {
		if (i % 2 == 0) { // even
			P.push(rotatePoints(first, -30 * i));
		} else {
			P.push(rotatePoints(first, -30 * (i + 1), true));
		}
	}
	return P;
}

function rotatePoints(coords, angle, reflect=false) {
	return coords.map(function ([x, y]) {
		const radians = angle * Math.PI / 180;
		const cos = Math.cos(radians);
		const sin = Math.sin(radians);
		if (reflect) {
			x = -x;
		}
		return [
			x * cos - y * sin,
			x * sin + y * cos
		];
	});
}

const P = generateP(P_0);
const quad = [P[10][0], [0,0], P[11][0], P[10][1]];
// M RIGHT
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];
// [P[][], P[][], P[][], P[][]];


// M LEFT
// [P[6][1], P[6][0], [0,0], P[7][0]];
// [P[6][7], P[6][4], P[6][2], P[6][5]];
// [P[6][15], P[6][14], P[6][10], P[7][14]];
// [P[7][7], P[7][5], P[7][2], P[7][4]];
// [P[8][13], P[8][12], P[8][10], P[8][14]];
// [P[9][8], P[9][6], P[9][2], P[9][5]];
// [P[10][11], P[10][9], P[10][10], P[10][12]];
// [P[11][3], P[11][0], P[11][2], P[11][6]];
// [P[0][1], P[1][9], P[0][10], P[0][9]];
// [P[2][3], P[2][6], P[2][2], P[2][0]];
// [P[3][11], P[3][12], P[3][10], P[3][9]];
// [P[4][8], P[4][5], P[4][2], P[4][6]];
// [P[5][13], P[5][14], P[5][10], P[5][12]];

// R BOTTOM
// [P[10][0], [0,0], P[11][0], P[10][1]];
// [P[10][14], P[10][10], P[11][14], P[10][15]];
// [P[11][5], P[11][2], P[11][4], P[11][7]];
// [P[0][12], P[0][10], P[0][14], P[0][13]];
// [P[10][4], P[10][2], P[10][5], P[10][7]];
// [P[9][14], P[9][10], P[9][12], P[9][13]];
// [P[8][5], P[8][2], P[8][6], P[8][8]];
// [P[7][12], P[7][10], P[7][9], P[7][11]];
// [P[6][6], P[6][2], P[6][0], P[6][3]];
// [P[5][9], P[5][10], P[4][9], P[5][1]];
// [P[3][0], P[3][2], P[3][6], P[3][3]];
// [P[2][9], P[2][10], P[2][12], P[2][11]];
// [P[1][6], P[1][2], P[1][5], P[1][8]];

// R TOP
// [P[8][1], P[8][0], [0,0], P[9][0]];
// [P[6][8], P[6][5], P[6][2], P[6][6]];
// [P[8][7], P[8][4], P[8][2], P[8][5]];
// [P[8][15], P[8][14], P[8][10], P[9][14]];
// [P[9][7], P[9][5], P[9][2], P[9][4]];
// [P[10][13], P[10][12], P[10][10], P[10][14]];
// [P[11][8], P[11][6], P[11][2], P[11][5]];
// [P[0][11], P[0][9], P[0][10], P[0][12]];
// [P[1][3], P[1][0], P[1][2], P[1][6]];
// [P[3][1], P[3][9], P[3][10], P[2][9]];
// [P[4][3], P[4][6], P[4][2], P[4][0]];
// [P[5][11], P[5][12], P[5][10], P[5][9]];
// [P[7][13], P[7][14], P[7][10], P[7][12]];

// [P[][], P[][], P[][], P[][]];

// console.log(rotatePoints(P_0, -60));
console.log(squareCoordsToQuad(6, mL, quad))


/**
 * @typedef {DOMPoint | [number, number]} Point
 */

/**
 * 
 * @param {number} sideLength 
 * @param {[number, number][]} coords 
 * @param {Point[]} quad 
 * @returns {[number, number][]}
 */
function squareCoordsToQuad(sideLength, coords, quad) {
	const s = 1 / sideLength;
	const nearX = add(quad[1], quad[0], true, s);
	const nearY = add(quad[3], quad[0], true, s);
	const farX = add(quad[2], quad[3], true, s);
	const farY = add(quad[2], quad[1], true, s);
	return coords.map(function ([x, y]) {
		const a1 = add(quad[0], scale(nearX, x));
		const a2 = add(quad[0], scale(nearY, y));
		const b1 = add(quad[3], scale(farX, x));
		const b2 = add(quad[1], scale(farY, y));
		return lineIntersection(a1, b1, a2, b2);
	});

}

/**
 * @param {Point} p
 * @param {number} scalar 
 */
function scale(p, scalar) {
	if ("x" in p) {
		return new DOMPoint(p.x * scalar, p.y * scalar);
	}
	return new DOMPoint(p[0] * scalar, p[1] * scalar);
}

/**
 * @param {Point} p
 * @param {Point} q 
 * @param {boolean} negate - If true, returns p - q. The second
 * point is negated in the sum.
 * @param {number} s - Scale the resulting sum by this scalar
 */
function add(p, q, negate = false, s = 1) {
	let px, py, qx, qy;
	if ("x" in p) {
		px = p.x;
		py = p.y
	} else {
		px = p[0];
		py = p[1];
	}
	if ("x" in q) {
		qx = q.x;
		qy = q.y
	} else {
		qx = q[0];
		qy = q[1];
	}
	if (negate) {
		qx = -qx;
		qy = -qy;
	}
	return new DOMPoint((px + qx) * s, (py + qy) * s);
}

/**
 * Finds the intersection point of two lines. One line is given, and the other
 * is the extension of the line segment between two given points.
 * @param {DOMPoint} p - The first of the two points which define the first line.
 * @param {DOMPoint} q - The second of the two points which define the first line.
 * @param {DOMPoint} a
 * @param {DOMPoint} b
 * @returns {[number, number]} The 2D point of intersection.
 */
function lineIntersection(p, q, a, b) {
	const n1 = p.x * q.y - p.y * q.x;
	const n2 = a.x * b.y - a.y * b.x;
	const n3 = (p.x - q.x) * (a.y - b.y) - (p.y - q.y) * (a.x - b.x);
	return [
		(n1 * (a.x - b.x) - (p.x - q.x) * n2) / n3,
		(n1 * (a.y - b.y) - (p.y - q.y) * n2) / n3
	];
}
