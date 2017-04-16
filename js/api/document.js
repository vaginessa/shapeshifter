(function() {
    'use strict';
    
    const fakeReferrerValue = randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ");
    
    Object.defineProperties(window.document, {
        referrer: {
            configurable: false,
            enumerable: true,
            get: function fakeReferrer() {
                console.log("[ALERT] " + window.location.hostname + " accessed property Document.referrer");
        
                return fakeReferrerValue;
            }
        }
    });
})();