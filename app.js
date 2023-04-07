const microphoneButton = document.getElementById("microphoneButton");

microphoneButton.addEventListener("click", function () {
	window.open(
		"https://peppi2-84n95g2s3-creator79.vercel.app/mic/",
		"nativeWindow",
		"width=350,height=300"
	);
});
