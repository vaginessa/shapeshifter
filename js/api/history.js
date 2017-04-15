(function() {
    'use strict';
    
    Object.defineProperties(History.prototype, {
        length: {
            value: randomNumber(0, 256),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();