const ascii = [
	{
		"id": "␀",
		"hex": "00",
		"ord": 0,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 0,
			"quaternary": 0,
			"binary": 0
		}
	},
	{
		"id": "␁",
		"hex": "01",
		"ord": 1,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 16,
			"quaternary": 64
		},
		"ibm866": "☺"
	},
	{
		"id": "␂",
		"hex": "02",
		"ord": 2,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 32,
			"binary": 64
		},
		"ibm866": "☻"
	},
	{
		"id": "␃",
		"hex": "03",
		"ord": 3,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 48
		},
		"ibm866": "♥"
	},
	{
		"id": "␄",
		"hex": "04",
		"ord": 4,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 64,
			"quaternary": 16,
			"binary": 32
		},
		"ibm866": "♦"
	},
	{
		"id": "␅",
		"hex": "05",
		"ord": 5,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 80,
			"quaternary": 80
		},
		"ibm866": "♣"
	},
	{
		"id": "␆",
		"hex": "06",
		"ord": 6,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 96,
			"binary": 96
		},
		"ibm866": "♠"
	},
	{
		"id": "␇",
		"hex": "07",
		"ord": 7,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 112
		},
		"ibm866": "•"
	},
	{
		"id": "\b",
		"hex": "08",
		"ord": 8,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 32,
			"binary": 16
		},
		"ibm866": "◘"
	},
	{
		"id": "\t",
		"hex": "09",
		"ord": 9,
		"url": [
			9,
			"horizontal tab characters are removed by parser"
		],
		"svg": [
			5,
			"whitespace, can collapse to \n instead"
		],
		"reversals": {
			"quaternary": 96
		},
		"ibm866": "○"
	},
	{
		"id": "\n",
		"hex": "0A",
		"ord": 10,
		"url": [
			9,
			"new line characters are removed by parser"
		],
		"svg": [
			1,
			"frequent use in XML syntax, for whitespace"
		],
		"reversals": {
			"binary": 80
		},
		"ibm866": "◙"
	},
	{
		"id": "␋",
		"hex": "0B",
		"ord": 11,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"ibm866": "♂"
	},
	{
		"id": "\f",
		"hex": "0C",
		"ord": 12,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 48,
			"binary": 48
		},
		"ibm866": "♀"
	},
	{
		"id": "\r",
		"hex": "0D",
		"ord": 13,
		"url": [
			9,
			"new line characters are removed by parser"
		],
		"svg": [
			5,
			"whitespace, can collapse to \n instead"
		],
		"reversals": {
			"quaternary": 112
		},
		"ibm866": "♪"
	},
	{
		"id": "␎",
		"hex": "0E",
		"ord": 14,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"binary": 112
		},
		"ibm866": "♫"
	},
	{
		"id": "␏",
		"hex": "0F",
		"ord": 15,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"ibm866": "☼"
	},
	{
		"id": "␐",
		"hex": "10",
		"ord": 16,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 1,
			"quaternary": 4,
			"binary": 8
		},
		"ibm866": "►"
	},
	{
		"id": "␑",
		"hex": "11",
		"ord": 17,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 17,
			"quaternary": 68
		},
		"ibm866": "◄"
	},
	{
		"id": "␒",
		"hex": "12",
		"ord": 18,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 33,
			"binary": 72
		},
		"ibm866": "↕"
	},
	{
		"id": "␓",
		"hex": "13",
		"ord": 19,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 49
		},
		"ibm866": "‼"
	},
	{
		"id": "␔",
		"hex": "14",
		"ord": 20,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 65,
			"quaternary": 20,
			"binary": 40
		},
		"ibm866": "¶"
	},
	{
		"id": "␕",
		"hex": "15",
		"ord": 21,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 81,
			"quaternary": 84
		},
		"ibm866": "§"
	},
	{
		"id": "␖",
		"hex": "16",
		"ord": 22,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 97,
			"binary": 104
		},
		"ibm866": "▬"
	},
	{
		"id": "␗",
		"hex": "17",
		"ord": 23,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"hexadecimal": 113
		},
		"ibm866": "↨"
	},
	{
		"id": "␘",
		"hex": "18",
		"ord": 24,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 36,
			"binary": 24
		},
		"ibm866": "↑"
	},
	{
		"id": "␙",
		"hex": "19",
		"ord": 25,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 100
		},
		"ibm866": "↓"
	},
	{
		"id": "␚",
		"hex": "1A",
		"ord": 26,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"binary": 88
		},
		"ibm866": "→"
	},
	{
		"id": "␛",
		"hex": "1B",
		"ord": 27,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"ibm866": "←"
	},
	{
		"id": "␜",
		"hex": "1C",
		"ord": 28,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 52,
			"binary": 56
		},
		"ibm866": "∟"
	},
	{
		"id": "␝",
		"hex": "1D",
		"ord": 29,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"quaternary": 116
		},
		"ibm866": "↔"
	},
	{
		"id": "␞",
		"hex": "1E",
		"ord": 30,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"reversals": {
			"binary": 120
		},
		"ibm866": "▲"
	},
	{
		"id": "␟",
		"hex": "1F",
		"ord": 31,
		"url": [
			9,
			"leading and trailing C0 controls are removed by parser"
		],
		"svg": [
			7,
			"not allowed in XML 1.0"
		],
		"ibm866": "▼"
	},
	{
		"id": "␠",
		"hex": "20",
		"ord": 32,
		"url": [
			9,
			"leading and trailing spaces are removed by parser"
		],
		"svg": [
			5,
			"whitespace, can collapse to \n instead"
		],
		"reversals": {
			"hexadecimal": 2,
			"quaternary": 8,
			"binary": 4
		}
	},
	{
		"id": "!",
		"hex": "21",
		"ord": 33,
		"url": [
			2,
			"allowed by encodeURIComponent"
		],
		"svg": [
			3,
			"uncommon use in XML syntax, for CDATA and comments"
		],
		"reversals": {
			"hexadecimal": 18,
			"quaternary": 72
		}
	},
	{
		"id": "\"",
		"hex": "22",
		"ord": 34,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			4,
			"unlikely use in XML syntax, try single quotes instead"
		],
		"reversals": {
			"hexadecimal": 34,
			"binary": 68
		}
	},
	{
		"id": "#",
		"hex": "23",
		"ord": 35,
		"url": [
			7,
			"not allowed as data, serves as separator"
		],
		"svg": [
			2,
			"standard use in color values and relative links"
		],
		"reversals": {
			"hexadecimal": 50
		}
	},
	{
		"id": "$",
		"hex": "24",
		"ord": 36,
		"url": [
			3,
			"allowed as data in both filenames and the query component"
		],
		"svg": [
			4,
			"unlikely use in CSS attribute selectors"
		],
		"reversals": {
			"hexadecimal": 66,
			"quaternary": 24,
			"binary": 36
		}
	},
	{
		"id": "%",
		"hex": "25",
		"ord": 37,
		"url": [
			7,
			"not allowed as data, serves as escape character"
		],
		"svg": [
			3,
			"uncommon use in URLs and CSS values"
		],
		"reversals": {
			"hexadecimal": 82,
			"quaternary": 88
		}
	},
	{
		"id": "&",
		"hex": "26",
		"ord": 38,
		"url": [
			5,
			"not allowed as data in query values, serves as separator"
		],
		"svg": [
			3,
			"uncommon use in XML syntax, for references"
		],
		"reversals": {
			"hexadecimal": 98,
			"binary": 100
		}
	},
	{
		"id": "'",
		"hex": "27",
		"ord": 39,
		"url": [
			2,
			"allowed by encodeURIComponent"
		],
		"svg": [
			1,
			"frequent use in XML syntax, for attributes"
		],
		"reversals": {
			"hexadecimal": 114
		}
	},
	{
		"id": "(",
		"hex": "28",
		"ord": 40,
		"url": [
			2,
			"allowed by encodeURIComponent"
		],
		"svg": [
			2,
			"standard use in transform values and CSS"
		],
		"reversals": {
			"quaternary": 40,
			"binary": 20
		}
	},
	{
		"id": ")",
		"hex": "29",
		"ord": 41,
		"url": [
			2,
			"allowed by encodeURIComponent"
		],
		"svg": [
			2,
			"standard use in transform values and CSS"
		],
		"reversals": {
			"quaternary": 104
		}
	},
	{
		"id": "*",
		"hex": "2A",
		"ord": 42,
		"url": [
			2,
			"allowed by encodeURIComponent"
		],
		"svg": [
			4,
			"unlikely use in CSS attribute selectors"
		],
		"reversals": {
			"binary": 84
		}
	},
	{
		"id": "+",
		"hex": "2B",
		"ord": 43,
		"url": [
			5,
			"not allowed as data in query values, serves as U+20 replacement"
		],
		"svg": [
			4,
			"unlikely use in CSS"
		]
	},
	{
		"id": ",",
		"hex": "2C",
		"ord": 44,
		"url": [
			3,
			"allowed as data in both filenames and the query component"
		],
		"svg": [
			1,
			"frequent use in SVG path data, as coordinate separator"
		],
		"reversals": {
			"quaternary": 56,
			"binary": 52
		}
	},
	{
		"id": "-",
		"hex": "2D",
		"ord": 45,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data, as minus sign"
		],
		"reversals": {
			"quaternary": 120
		}
	},
	{
		"id": ".",
		"hex": "2E",
		"ord": 46,
		"url": [
			0,
			"unreserved, allowed as data and as domain separator"
		],
		"svg": [
			1,
			"frequent use in SVG path data, as decimal point"
		],
		"reversals": {
			"binary": 116
		}
	},
	{
		"id": "/",
		"hex": "2F",
		"ord": 47,
		"url": [
			4,
			"not allowed as data in filenames, serves as separator"
		],
		"svg": [
			0,
			"required use in XML syntax, for tags"
		]
	},
	{
		"id": "0",
		"hex": "30",
		"ord": 48,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 3,
			"quaternary": 12,
			"binary": 12
		}
	},
	{
		"id": "1",
		"hex": "31",
		"ord": 49,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 19,
			"quaternary": 76
		}
	},
	{
		"id": "2",
		"hex": "32",
		"ord": 50,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 35,
			"binary": 76
		}
	},
	{
		"id": "3",
		"hex": "33",
		"ord": 51,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 51
		}
	},
	{
		"id": "4",
		"hex": "34",
		"ord": 52,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 67,
			"quaternary": 28,
			"binary": 44
		}
	},
	{
		"id": "5",
		"hex": "35",
		"ord": 53,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 83,
			"quaternary": 92
		}
	},
	{
		"id": "6",
		"hex": "36",
		"ord": 54,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 99,
			"binary": 108
		}
	},
	{
		"id": "7",
		"hex": "37",
		"ord": 55,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"hexadecimal": 115
		}
	},
	{
		"id": "8",
		"hex": "38",
		"ord": 56,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"quaternary": 44,
			"binary": 28
		}
	},
	{
		"id": "9",
		"hex": "39",
		"ord": 57,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			1,
			"frequent use in SVG path data"
		],
		"reversals": {
			"quaternary": 108
		}
	},
	{
		"id": ":",
		"hex": "3A",
		"ord": 58,
		"url": [
			4,
			"can cause ambiguity between relative and absolute URLs"
		],
		"svg": [
			2,
			"standard use as separator in CSS"
		],
		"reversals": {
			"binary": 92
		}
	},
	{
		"id": ";",
		"hex": "3B",
		"ord": 59,
		"url": [
			3,
			"allowed as data in both filenames and the query component"
		],
		"svg": [
			2,
			"standard use as separator in CSS"
		]
	},
	{
		"id": "<",
		"hex": "3C",
		"ord": 60,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			0,
			"required use in XML syntax, for tags"
		],
		"reversals": {
			"quaternary": 60,
			"binary": 60
		}
	},
	{
		"id": "=",
		"hex": "3D",
		"ord": 61,
		"url": [
			4,
			"not allowed as data in query keys, serves as separator"
		],
		"svg": [
			0,
			"required use in XML syntax, for attributes"
		],
		"reversals": {
			"quaternary": 124
		}
	},
	{
		"id": ">",
		"hex": "3E",
		"ord": 62,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			0,
			"required use in XML syntax, for tags"
		],
		"reversals": {
			"binary": 124
		}
	},
	{
		"id": "?",
		"hex": "3F",
		"ord": 63,
		"url": [
			4,
			"not allowed as data in filenames, serves as separator"
		],
		"svg": [
			4,
			"unlikely use in embedded JavaScript"
		]
	},
	{
		"id": "@",
		"hex": "40",
		"ord": 64,
		"url": [
			3,
			"allowed as data in both filenames and the query component"
		],
		"svg": [
			3,
			"uncommon use in CSS at-rules"
		],
		"reversals": {
			"hexadecimal": 4,
			"quaternary": 1,
			"binary": 2
		}
	},
	{
		"id": "A",
		"hex": "41",
		"ord": 65,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 20,
			"quaternary": 65
		}
	},
	{
		"id": "B",
		"hex": "42",
		"ord": 66,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use outside of 'viewBox' attribute"
		],
		"reversals": {
			"hexadecimal": 36,
			"binary": 66
		}
	},
	{
		"id": "C",
		"hex": "43",
		"ord": 67,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 52
		}
	},
	{
		"id": "D",
		"hex": "44",
		"ord": 68,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in XML syntax, for CDATA"
		],
		"reversals": {
			"hexadecimal": 68,
			"quaternary": 17,
			"binary": 34
		}
	},
	{
		"id": "E",
		"hex": "45",
		"ord": 69,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in attribute names, 'requiredExtensions' as example"
		],
		"reversals": {
			"hexadecimal": 84,
			"quaternary": 81
		}
	},
	{
		"id": "F",
		"hex": "46",
		"ord": 70,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in element names, 'feFlood' as example"
		],
		"reversals": {
			"hexadecimal": 100,
			"binary": 98
		}
	},
	{
		"id": "G",
		"hex": "47",
		"ord": 71,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in attribute values, 'spacingAndGlyphs' as example"
		],
		"reversals": {
			"hexadecimal": 116
		}
	},
	{
		"id": "H",
		"hex": "48",
		"ord": 72,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 33,
			"binary": 18
		}
	},
	{
		"id": "I",
		"hex": "49",
		"ord": 73,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in element names, 'feImage' as example"
		],
		"reversals": {
			"quaternary": 97
		}
	},
	{
		"id": "J",
		"hex": "4A",
		"ord": 74,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in embedded JavaScript, 'JSON' as example"
		],
		"reversals": {
			"binary": 82
		}
	},
	{
		"id": "K",
		"hex": "4B",
		"ord": 75,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in embedded JavaScript, 'importKey' as example"
		]
	},
	{
		"id": "L",
		"hex": "4C",
		"ord": 76,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 49,
			"binary": 50
		}
	},
	{
		"id": "M",
		"hex": "4D",
		"ord": 77,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 113
		}
	},
	{
		"id": "N",
		"hex": "4E",
		"ord": 78,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in element names, 'feMergeNode' as example"
		],
		"reversals": {
			"binary": 114
		}
	},
	{
		"id": "O",
		"hex": "4F",
		"ord": 79,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in element names, 'foreignObject' as example"
		]
	},
	{
		"id": "P",
		"hex": "50",
		"ord": 80,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in element names, 'clipPath' as example"
		],
		"reversals": {
			"hexadecimal": 5,
			"quaternary": 5,
			"binary": 10
		}
	},
	{
		"id": "Q",
		"hex": "51",
		"ord": 81,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 21,
			"quaternary": 69
		}
	},
	{
		"id": "R",
		"hex": "52",
		"ord": 82,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in attribute names, 'preserveAspectRatio' as example"
		],
		"reversals": {
			"hexadecimal": 37,
			"binary": 74
		}
	},
	{
		"id": "S",
		"hex": "53",
		"ord": 83,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 53
		}
	},
	{
		"id": "T",
		"hex": "54",
		"ord": 84,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 69,
			"quaternary": 21,
			"binary": 42
		}
	},
	{
		"id": "U",
		"hex": "55",
		"ord": 85,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in attribute names, 'patternUnits' as example"
		],
		"reversals": {
			"hexadecimal": 85,
			"quaternary": 85
		}
	},
	{
		"id": "V",
		"hex": "56",
		"ord": 86,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 101,
			"binary": 106
		}
	},
	{
		"id": "W",
		"hex": "57",
		"ord": 87,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in attribute names, 'markerWidth' as example"
		],
		"reversals": {
			"hexadecimal": 117
		}
	},
	{
		"id": "X",
		"hex": "58",
		"ord": 88,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in CSS function names, 'rotateX' as example"
		],
		"reversals": {
			"quaternary": 37,
			"binary": 26
		}
	},
	{
		"id": "Y",
		"hex": "59",
		"ord": 89,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in CSS function names, 'rotateY' as example"
		],
		"reversals": {
			"quaternary": 101
		}
	},
	{
		"id": "Z",
		"hex": "5A",
		"ord": 90,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			4,
			"unlikely use in CSS function names, 'scaleZ' as example"
		],
		"reversals": {
			"binary": 90
		}
	},
	{
		"id": "[",
		"hex": "5B",
		"ord": 91,
		"url": [
			6,
			"only allowed in IP addresses of URLs, might not cause any issues elsewhere"
		],
		"svg": [
			3,
			"uncommon use in XML syntax, for CDATA"
		]
	},
	{
		"id": "\\",
		"hex": "5C",
		"ord": 92,
		"url": [
			9,
			"not allowed in URLs, converted to forward slash in some cases"
		],
		"svg": [
			4,
			"unlikely use in CSS or embedded JavaScript"
		],
		"reversals": {
			"quaternary": 53,
			"binary": 58
		}
	},
	{
		"id": "]",
		"hex": "5D",
		"ord": 93,
		"url": [
			6,
			"only allowed in IP addresses of URLs, might not cause any issues elsewhere"
		],
		"svg": [
			3,
			"uncommon use in XML syntax, for CDATA"
		],
		"reversals": {
			"quaternary": 117
		}
	},
	{
		"id": "^",
		"hex": "5E",
		"ord": 94,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			4,
			"unlikely use in CSS attribute selectors"
		],
		"reversals": {
			"binary": 122
		}
	},
	{
		"id": "_",
		"hex": "5F",
		"ord": 95,
		"url": [
			1,
			"unreserved, allowed as data"
		],
		"svg": [
			5,
			"separator, can use hyphen instead"
		]
	},
	{
		"id": "`",
		"hex": "60",
		"ord": 96,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			4,
			"unlikely use in embedded JavaScript"
		],
		"reversals": {
			"hexadecimal": 6,
			"quaternary": 9,
			"binary": 6
		}
	},
	{
		"id": "a",
		"hex": "61",
		"ord": 97,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 22,
			"quaternary": 73
		}
	},
	{
		"id": "b",
		"hex": "62",
		"ord": 98,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in colors, as hexadecimal digit"
		],
		"reversals": {
			"hexadecimal": 38,
			"binary": 70
		}
	},
	{
		"id": "c",
		"hex": "63",
		"ord": 99,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 54
		}
	},
	{
		"id": "d",
		"hex": "64",
		"ord": 100,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in colors, as hexadecimal digit"
		],
		"reversals": {
			"hexadecimal": 70,
			"quaternary": 25,
			"binary": 38
		}
	},
	{
		"id": "e",
		"hex": "65",
		"ord": 101,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in numerical data, as exponent indicator"
		],
		"reversals": {
			"hexadecimal": 86,
			"quaternary": 89
		}
	},
	{
		"id": "f",
		"hex": "66",
		"ord": 102,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in colors, as hexadecimal digit"
		],
		"reversals": {
			"hexadecimal": 102,
			"binary": 102
		}
	},
	{
		"id": "g",
		"hex": "67",
		"ord": 103,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			-1,
			"used in XML syntax, in declaration"
		],
		"reversals": {
			"hexadecimal": 118
		}
	},
	{
		"id": "h",
		"hex": "68",
		"ord": 104,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 41,
			"binary": 22
		}
	},
	{
		"id": "i",
		"hex": "69",
		"ord": 105,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'stroke-width' as example"
		],
		"reversals": {
			"quaternary": 105
		}
	},
	{
		"id": "j",
		"hex": "6A",
		"ord": 106,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			3,
			"uncommon use in element names, 'foreignObject' as example"
		],
		"reversals": {
			"binary": 86
		}
	},
	{
		"id": "k",
		"hex": "6B",
		"ord": 107,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'stroke-width' as example"
		]
	},
	{
		"id": "l",
		"hex": "6C",
		"ord": 108,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 57,
			"binary": 54
		}
	},
	{
		"id": "m",
		"hex": "6D",
		"ord": 109,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"quaternary": 121
		}
	},
	{
		"id": "n",
		"hex": "6E",
		"ord": 110,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'transform' as example"
		],
		"reversals": {
			"binary": 118
		}
	},
	{
		"id": "o",
		"hex": "6F",
		"ord": 111,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'stroke-width' as example"
		]
	},
	{
		"id": "p",
		"hex": "70",
		"ord": 112,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in element names, 'path' as example"
		],
		"reversals": {
			"hexadecimal": 7,
			"quaternary": 13,
			"binary": 14
		}
	},
	{
		"id": "q",
		"hex": "71",
		"ord": 113,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 23,
			"quaternary": 77
		}
	},
	{
		"id": "r",
		"hex": "72",
		"ord": 114,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'stroke-width' as example"
		],
		"reversals": {
			"hexadecimal": 39,
			"binary": 78
		}
	},
	{
		"id": "s",
		"hex": "73",
		"ord": 115,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 55
		}
	},
	{
		"id": "t",
		"hex": "74",
		"ord": 116,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 71,
			"quaternary": 29,
			"binary": 46
		}
	},
	{
		"id": "u",
		"hex": "75",
		"ord": 117,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in element names, 'use' as example"
		],
		"reversals": {
			"hexadecimal": 87,
			"quaternary": 93
		}
	},
	{
		"id": "v",
		"hex": "76",
		"ord": 118,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"hexadecimal": 103,
			"binary": 110
		}
	},
	{
		"id": "w",
		"hex": "77",
		"ord": 119,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'stroke-width' as example"
		],
		"reversals": {
			"hexadecimal": 119
		}
	},
	{
		"id": "x",
		"hex": "78",
		"ord": 120,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'x' as example"
		],
		"reversals": {
			"quaternary": 45,
			"binary": 30
		}
	},
	{
		"id": "y",
		"hex": "79",
		"ord": 121,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use in attribute names, 'y' as example"
		],
		"reversals": {
			"quaternary": 109
		}
	},
	{
		"id": "z",
		"hex": "7A",
		"ord": 122,
		"url": [
			0,
			"unreserved, allowed as data and in domain"
		],
		"svg": [
			2,
			"standard use as SVG path command"
		],
		"reversals": {
			"binary": 94
		}
	},
	{
		"id": "{",
		"hex": "7B",
		"ord": 123,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			3,
			"uncommon use inside CSS <style> element"
		]
	},
	{
		"id": "|",
		"hex": "7C",
		"ord": 124,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			4,
			"unlikely use in CSS selectors"
		],
		"reversals": {
			"quaternary": 61,
			"binary": 62
		},
		"ibm866": "¦"
	},
	{
		"id": "}",
		"hex": "7D",
		"ord": 125,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			3,
			"uncommon use inside CSS <style> element"
		],
		"reversals": {
			"quaternary": 125
		}
	},
	{
		"id": "~",
		"hex": "7E",
		"ord": 126,
		"url": [
			1,
			"unreserved, allowed as data"
		],
		"svg": [
			4,
			"unlikely use in CSS selectors"
		],
		"reversals": {
			"binary": 126
		}
	},
	{
		"id": "␡",
		"hex": "7F",
		"ord": 127,
		"url": [
			8,
			"not allowed in URLs, but might not cause any issues"
		],
		"svg": [
			6,
			"discouraged in XML 1.0"
		],
		"ibm866": "⌂"
	}
];

const urlRating = [
	{
		"unreserved, allowed in domain name": [
			"-",
			".",
			"0",
			"1",
			"2",
			"3",
			"4",
			"5",
			"6",
			"7",
			"8",
			"9",
			"A",
			"B",
			"C",
			"D",
			"E",
			"F",
			"G",
			"H",
			"I",
			"J",
			"K",
			"L",
			"M",
			"N",
			"O",
			"P",
			"Q",
			"R",
			"S",
			"T",
			"U",
			"V",
			"W",
			"X",
			"Y",
			"Z",
			"a",
			"b",
			"c",
			"d",
			"e",
			"f",
			"g",
			"h",
			"i",
			"j",
			"k",
			"l",
			"m",
			"n",
			"o",
			"p",
			"q",
			"r",
			"s",
			"t",
			"u",
			"v",
			"w",
			"x",
			"y",
			"z"
		]
	},
	{
		"unreserved, not allowed in domain name": [
			"_",
			"~"
		]
	},
	{
		"allowed by encodeURIComponent": [
			"!",
			"'",
			"(",
			")",
			"*"
		]
	},
	{
		"allowed in both filenames and the query component": [
			"$",
			",",
			";",
			"@"
		]
	},
	{
		"allowed in query values, but causes issues in filenames or query keys": [
			"/",
			":",
			"=",
			"?"
		]
	},
	{
		"allowed in data URI content, but not in query values": [
			"&",
			"+"
		]
	},
	{
		"appears only as delimiter": [
			"[",
			"]"
		]
	},
	{
		"appears only as delimiter, and can cause issues in data URI content": [
			"#",
			"%"
		]
	},
	{
		"not allowed in URLs, but might not cause any issues": [
			"\"",
			"<",
			">",
			"^",
			"`",
			"{",
			"|",
			"}",
			"␡"
		]
	},
	{
		"not allowed in URLs, and can cause issues in parsing": [
			"␀",
			"␁",
			"␂",
			"␃",
			"␄",
			"␅",
			"␆",
			"␇",
			"\b",
			"\t",
			"\n",
			"␋",
			"\f",
			"\r",
			"␎",
			"␏",
			"␐",
			"␑",
			"␒",
			"␓",
			"␔",
			"␕",
			"␖",
			"␗",
			"␘",
			"␙",
			"␚",
			"␛",
			"␜",
			"␝",
			"␞",
			"␟",
			"␠",
			"\\"
		]
	}
];

// node ascii-notes.js | jq '.' --tab | pbcopy
