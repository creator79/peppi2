const microphoneButton = document.getElementById("microphoneButton");

microphoneButton.addEventListener("click", function () {
	window.open(
		"http://127.0.0.1:5501/mic/",
		"nativeWindow",
		"width=350,height=300"
	);
});
