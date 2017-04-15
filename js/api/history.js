(function() {
    'use strict';
    
    function fakeLength() {
        console.log("[ALERT] " + window.location.hostname + " accessed property History.length");
        
        return randomNumber(0, 256);
    }
    
    Object.defineProperties(History.prototype, {
        length: {
            value: fakeLength(),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();