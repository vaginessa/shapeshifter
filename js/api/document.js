(function() {
    'use strict';

    function fakeReferrer(origin) {
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

    const origin = window.location.hostname;

    const fakeReferrerValue = fakeReferrer(origin);

    Object.defineProperties(window.document, {
        referrer: {
            configurable: false,
            enumerable: true,
            get: function getReferrer() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Document.referrer");

                return fakeReferrerValue;
            }
        }
    });
})();
