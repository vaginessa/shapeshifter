(function() {
    'use strict';
    
    function fakeReferrer() {
        console.log("[ALERT] " + window.location.hostname + " accessed property Document.referrer");
        
        return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    }
    
    Object.defineProperties(Document.prototype, {
        referrer: {
            value: fakeReferrer(),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();