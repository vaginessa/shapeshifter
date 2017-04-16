(function() {
    'use strict';
    
    const fakeLengthValue = randomNumber(0, 256);
    
    Object.defineProperties(window.history, {
        length: {
            configurable: false,
            enumerable: true,
            get: function fakeLength() {
                console.log("[ALERT] " + window.location.hostname + " accessed property History.length");
        
                return fakeLengthValue;
            }
        }
    });
})();