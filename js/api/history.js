(function() {
    'use strict';

    function fakeLength(origin) { Math.seedrandom(origin); return randomNumber(0, 256); }

    const origin = window.location.hostname;

    const fakeLengthValue = fakeLength(origin);

    Object.defineProperties(window.history, {
        length: {
            configurable: false,
            enumerable: true,
            get: function getLength() {
                console.log("[ALERT] " + window.location.hostname + " accessed property History.length");

                return fakeLengthValue;
            }
        }
    });
})();
