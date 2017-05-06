/*
* Returns a random string with length 'length'
* containing characters in the 'charset' string.
*/
function randomString(length, charset) {
	var string = "";

	for (var i = 0; i < length; i++) {
		string += charset[randomNumber(0, charset.length)];
	}

	return string;
}

/*
* Returns a random boolean value.
* Either 'true' or 'false'.
*/
function randomBoolean() {
    return randomNumber(0, 2) ? true : false;
}

/*
* Returns a random number between 'min' (inclusive)
* and 'max' (exclusive). Lowest possible value is 'min'.
* Largest possible value is 'max - 1'.
*/
function randomNumber(min, max) {
	return Math.floor(Math.random() * (max - min) + min);
}
