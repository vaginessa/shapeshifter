"use strict";

function randomAcceptHeader(origin) {
	return "NotYetImplemented";
}
function randomAcceptCharsetHeader(origin) {
	return "NotYetImplemented";
}
function randomAcceptEncodingHeader(origin) {
	return "NotYetImplemented";
}
function randomAcceptLanguageHeader(origin) {
    Math.seedrandom(origin);
	return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
function randomAuthorizationHeader(origin) {
	return "NotYetImplemented";
}
function randomExpectHeader(origin) {
	return "NotYetImplemented";
}
function randomFromHeader(origin) {
	return "NotYetImplemented";
}
function randomHostHeader(origin) {
	return "NotYetImplemented";
}
function randomIfMatchHeader(origin) {
	return "NotYetImplemented";
}
function randomIfModifiedSinceHeader(origin) {
	return "NotYetImplemented";
}
function randomIfNoneMatchHeader(origin) {
	return "NotYetImplemented";
}
function randomIfRangeHeader(origin) {
	return "NotYetImplemented";
}
function randomIfUnmodifiedSinceHeader(origin) {
	return "NotYetImplemented";
}
function randomMaxForwardsHeader(origin) {
	return "NotYetImplemented";
}
function randomProxyAuthorizationHeader(origin) {
	return "NotYetImplemented";
}
function randomRangeHeader(origin) {
	return "NotYetImplemented";
}
function randomRefererHeader(origin) {
    Math.seedrandom(origin);
    return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}
function randomTEHeader(origin) {
	return "NotYetImplemented";
}
function randomUserAgentHeader(origin) {
    Math.seedrandom(origin);
	return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

function rewriteHttpHeaders(e) {
    var serverUrl = new URL(e.url);
    var origin = serverUrl.hostname;
    
	for (var header of e.requestHeaders) {
		if (header.name.toLowerCase() === "accept") {
		}
		else if (header.name.toLowerCase() === "accept-charset") {
		}
		else if (header.name.toLowerCase() === "accept-encoding") {
		}
		else if (header.name.toLowerCase() === "accept-language") {
            header.value = randomAcceptLanguageHeader(origin);
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
			header.value = randomRefererHeader(origin);
		}
		else if (header.name.toLowerCase() === "te") {
		}
		else if (header.name.toLowerCase() === "user-agent") {
			header.value = randomUserAgentHeader(origin);
		}		
	}

	return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(rewriteHttpHeaders, {urls: ["<all_urls>"]}, ["blocking", "requestHeaders"]);