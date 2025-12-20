function singleCard(recipe, r = 0, c = 0) {
	let svg;
	if (r == 0 && c == 0) {
		svg ='<g>';
	} else if (r == 0) {
		svg = `<g transform="translate(${6 * c})">`;
	} else {
		svg = `<g transform="translate(${6 * c},${10 * r})">`;
	}
	const notBlank = Array.from(recipe).map(c => c != '-');
	if (notBlank[5]) {
		svg += `<use href="#${recipe[5]}" x="2" y="4" transform="translate(6)scale(-1,1)"/>`;
	}
	if (recipe.startsWith('-----')) {
		return svg + '</g>';
	}
	const topID = `top_${r}_${c}`;
	svg += `<g id="${topID}">`;
	if (notBlank[0]) {
		svg += `<use href="#${recipe[0]}" x="1" y="1"/>`;
	}
	if (notBlank[1]) {
		svg += `<use href="#${recipe[1]}" x="3" y="1"/>`;
	}
	if (notBlank[2]) {
		svg += `<use href="#${recipe[2]}" x="2" y="2" transform="translate(6)scale(-1,1)"/>`;
	}
	if (notBlank[3]) {
		svg += `<use href="#${recipe[3]}" x="1" y="3"/>`;
	}
	if (notBlank[4]) {
		svg += `<use href="#${recipe[4]}" x="3" y="3"/>`;
	}
	return svg + `</g><use href="#${topID}" transform="rotate(180,3,5)"/></g>`;
}

const cards = [
	[
		'-----s',
		'--s---',
		'--s--s',
		'ss----',
		'ss---s',
		'sss---',
		'sss--s',
		'ss-ss-',
		'ss-sss',
		'sssss-',
		'ssssss'
	],
	[
		'-----d',
		'-d----',
		'-d---d',
		'-d-d--',
		'-d-d-d',
		'-d-dd-',
		'-d-ddd',
		'-dddd-',
		'-ddddd',
		'ddddd-',
		'dddddd'
	],
	[
		'-----c',
		'-c----',
		'-c---c',
		'-c-c--',
		'-c-c-c',
		'-c-cc-',
		'-c-ccc',
		'-cccc-',
		'-ccccc',
		'ccccc-',
		'cccccc'
	],
	[
		'-----h',
		'--h---',
		'--h--h',
		'hh----',
		'hh---h',
		'hhh---',
		'hhh--h',
		'hh-hh-',
		'hh-hhh',
		'hhhhh-',
		'hhhhhh'
	],
	[
		'-----u',
		'-----w',
		'----uu',
		'----uw',
		'----wu',
		'----ww',
		'---uwu',
		'---uww',
		'---wwu',
		'---www',
		'--uwwu'
	],
	[
		'--uwww',
		'--wwwu',
		'--wwww',
		'-uwwwu',
		'-uwwww',
		'-wwwwu',
		'-wwwww',
		'uwwwwu',
		'uwwwww',
		'wwwwwu',
		'wwwwww'
	]
];

let svg = '';
for (let r = 0; r < cards.length; ++r) {
	for (let c = 0; c < cards[r].length; ++c) {
		svg += singleCard(cards[r][c], r, c);
	}
}
document.getElementById('layout').outerHTML = svg;
