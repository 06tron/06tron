//<![CDATA[

// cssDL: (...rules: CSSStyleRule[]) => HTMLDListElement
function cssDL(...rules) {
	const dl = document.createElement("dl");
	rules.forEach(rule => {
		newDefinition(dl, rule.selectorText).append(propertiesDL(rule));
	});
	return dl;
}

// propertiesDL: (rule: CSSStyleRule) => HTMLDListElement
function propertiesDL(rule) {
	const dl = document.createElement("dl");
	propertyNames(rule).forEach(prop => {
		newDefinition(dl, prop).textContent = rule.style.getPropertyValue(prop);
	});
	return dl;
}

// newDefinition: (dl: HTMLDListElement, term: string) => HTMLElement
function newDefinition(dl, term) {
	dl.appendChild(document.createElement("dt")).textContent = term;
	return dl.appendChild(document.createElement("dd"));
}

// propertyNames: (rule: CSSStyleRule) => string[]
function propertyNames(rule) {
	return rule.cssText.match(/(?<=[{;]\s*)[a-z-]+(?=:)/g);
	// Array.from(rule.style) doesn't include shorthand properties
}

const rules = document.querySelector("style").sheet.cssRules;
document.getElementById("after_general_css").before(cssDL(rules[0], rules[1], rules[2]));
document.getElementById("after_pre_a_css").before(cssDL(rules[3]));
document.getElementById("after_pre_b_css").before(cssDL(rules[4]));
document.getElementById("after_pre_c_css").before(cssDL(rules[5], rules[6]));

//]]>
