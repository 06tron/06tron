function clickToCopy(button: HTMLElement, getText: () => string): void {
	const initialMessage = button.innerText;
	button.addEventListener("mousedown", () => {
		navigator.clipboard.writeText(getText());
		button.innerText = "Copied!";
		setTimeout(() => {
			button.innerText = initialMessage;
		}, 1200);
	});
}
