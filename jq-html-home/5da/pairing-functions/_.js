const h = [
	(n, k) => (2 * k + 1 << n) - 1, // A075300
	(n, k) => n < k ? (k + 2) * k - n : n**2 + k, // A220508
	(n, k) => (n + k)**2 + 3 * n + k >> 1, // A061579
];

const rows = 100;
const cols = 100;
const totalFrames = 300;

function pixelOffsets(pairId) {
	const offsetTable = [];
	for (let r = 0; r < rows; ++r) {
		const offsetRow = [];
		for (let c = 0; c < cols; ++c) {
			offsetRow.push(pairId(r, c) % totalFrames);
		}
		offsetTable.push(offsetRow);
	}
	return offsetTable;
}

const offsetTables = new Map();

function displayPairing(pairId) {
	const offset = offsetTables.getOrInsertComputed(pairId, pixelOffsets);
}

function intSequence(pairId) {
	const out = [];
	for (let diag = 0; diag < 5; ++diag) {
		for (let i = 0; i <= diag; ++i) {
			out.push(pairId(diag - i, i));
		}
	}
	return out.join();
}
