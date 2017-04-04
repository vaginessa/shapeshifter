function randomString(length, charset) {
	var string = "";

	for (var i = 0; i < length; i++) {
		string += charset[randomNumber(0, charset.length)];
	}

	return string;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}

function fake() {
    return "Fake Function";
}