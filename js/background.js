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

    const language = languages[randomNumber(0, languages.length)];

    const languageParts = language.split("-");

    switch (languageParts.length) {
        case 2:
            return languageParts[0] + "-" + languageParts[1] + ";q=0.8," + languageParts[0] + ";q=0.6";
        case 3:
            // TODO: How to display Cyrillic or Latin versions of the same language???
    }
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

    const firstWord = words[randomNumber(0, words.length)];
    const secondWord = words[randomNumber(0, words.length)];
    const thirdWord = words[randomNumber(0, words.length)];
    const firstDirName = words[randomNumber(0, words.length)];
    const secondDirName = words[randomNumber(0, words.length)];
    const thirdDirName = words[randomNumber(0, words.length)];

    const protocols = ["https", "http"];

    const protocol = protocols[randomNumber(0, protocols.length)];

    const tlds = ["com", "net", "org", "gov", "info", "xxx"];

    const tld = tlds[randomNumber(0, tlds.length)];

    const referrer = protocol + "://www." + firstWord + secondWord + thirdWord + "." + tld + "/" + firstDirName + "/" + secondDirName + "/" + thirdDirName;

    return referrer;
}
function randomTEHeader(origin) {
	return "NotYetImplemented";
}
function randomUserAgentHeader(origin) {
    Math.seedrandom(origin);
    const randomBrowser = randomNumber(0, 5);
    switch (randomBrowser) {
        case 0:
            return ieUserAgents[randomNumber(0, ieUserAgents.length)];
        case 1:
            return firefoxUserAgents[randomNumber(0, firefoxUserAgents.length)];
        case 2:
            return chromeUserAgents[randomNumber(0, chromeUserAgents.length)];
        case 3:
            return safariUserAgents[randomNumber(0, safariUserAgents.length)];
        case 4:
            return operaUserAgents[randomNumber(0, operaUserAgents.length)];
    }
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
