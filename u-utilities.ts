function clickToCopy(button: HTMLElement, getText) { // getText is function () => string
	const initialMessage = button.innerText;
	button.addEventListener("mousedown", function () {
		navigator.clipboard.writeText(getText());
		button.innerText = "Copied!";
		setTimeout(function () {
			button.innerText = initialMessage;
		}, 1200);
	});
}
