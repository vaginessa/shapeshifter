function randomString(length, charset) {
	var string = "";

	for (var i = 0; i < length; i++) {
		string += charset[randomNumber(0, charset.length)];
	}

	return string;
}

function randomBoolean() {
    return randomNumber(0, 2) ? true : false;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}