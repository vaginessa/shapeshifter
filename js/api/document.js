(function() {
    'use strict';
    
    Object.defineProperties(Document.prototype, {
        referrer: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();