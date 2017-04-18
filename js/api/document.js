(function() {
    'use strict';
    
    function fakeReferrer(origin) { Math.seedrandom(origin); return randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"); }
    
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