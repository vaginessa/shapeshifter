"use strict";

function randomAcceptHeader() {
	return "NotYetImplemented";
}
function randomAcceptCharsetHeader() {
	return "NotYetImplemented";
}
function randomAcceptEncodingHeader() {
	return "NotYetImplemented";
}
function randomAcceptLanguageHeader() {
	return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
function randomAuthorizationHeader() {
	return "NotYetImplemented";
}
function randomExpectHeader() {
	return "NotYetImplemented";
}
function randomFromHeader() {
	return "NotYetImplemented";
}
function randomHostHeader() {
	return "NotYetImplemented";
}
function randomIfMatchHeader() {
	return "NotYetImplemented";
}
function randomIfModifiedSinceHeader() {
	return "NotYetImplemented";
}
function randomIfNoneMatchHeader() {
	return "NotYetImplemented";
}
function randomIfRangeHeader() {
	return "NotYetImplemented";
}
function randomIfUnmodifiedSinceHeader() {
	return "NotYetImplemented";
}
function randomMaxForwardsHeader() {
	return "NotYetImplemented";
}
function randomProxyAuthorizationHeader() {
	return "NotYetImplemented";
}
function randomRangeHeader() {
	return "NotYetImplemented";
}
function randomRefererHeader() {
    return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
function randomTEHeader() {
	return "NotYetImplemented";
}
function randomUserAgentHeader() {
	return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

function rewriteHttpHeaders(e) {
	for (var header of e.requestHeaders) {
		if (header.name.toLowerCase() === "accept") {
		}
		else if (header.name.toLowerCase() === "accept-charset") {
		}
		else if (header.name.toLowerCase() === "accept-encoding") {
		}
		else if (header.name.toLowerCase() === "accept-language") {
            header.value = randomAcceptLanguageHeader();
		}
		else if (header.name.toLowerCase() === "authorization") {
		}
		else if (header.name.toLowerCase() === "expect") {
		}
		else if (header.name.toLowerCase() === "from") {
		}
		else if (header.name.toLowerCase() === "host") {
		}
		else if (header.name.toLowerCase() === "if-match") {
		}
		else if (header.name.toLowerCase() === "if-modified-since") {
		}
		else if (header.name.toLowerCase() === "if-none-match") {
		}
		else if (header.name.toLowerCase() === "if-range") {
		}
		else if (header.name.toLowerCase() === "if-unmodified-since") {
		}
		else if (header.name.toLowerCase() === "max-forwards") {
		}
		else if (header.name.toLowerCase() === "proxy-authorization") {
		}
		else if (header.name.toLowerCase() === "range") {
		}
		else if (header.name.toLowerCase() === "referer") {
			header.value = randomRefererHeader();
		}
		else if (header.name.toLowerCase() === "te") {
		}
		else if (header.name.toLowerCase() === "user-agent") {
			header.value = randomUserAgentHeader();
		}		
	}

	return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(rewriteHttpHeaders, {urls: ["<all_urls>"]}, ["blocking", "requestHeaders"]);