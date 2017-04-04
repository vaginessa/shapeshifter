"use strict";

function randomUserAgentHeader() {
	return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
}

function rewriteHttpHeaders(e) {
	for (var header of e.requestHeaders) {
        if (header.name.toLowerCase() === "user-agent") {
			header.value = randomUserAgentHeader();
		}		
	}

	return {requestHeaders: e.requestHeaders};
}

chrome.webRequest.onBeforeSendHeaders.addListener(rewriteHttpHeaders, {urls: ["<all_urls>"]}, ["blocking", "requestHeaders"]);