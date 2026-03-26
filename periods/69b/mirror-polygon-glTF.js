function glTF() {
	const transforms = Array.from(document.querySelectorAll('use'), e => e.style.getPropertyValue('transform'));
	transforms.sort();
	console.log(transforms);
}
