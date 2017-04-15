(function() {
    'use strict';
    
    Object.defineProperties(BatteryManager.prototype, {
        charging: {
            value: randomBoolean(),
            configurable: false,
            enumerable: true,
            writable: false
        },
        
        // TODO: This value could be infinity, if device is not charging
        chargingTime: {
            value: randomNumber(0, 9999),
            configurable: false,
            enumerable: true,
            writable: false
        },
        
        // TODO: This value could be infinity, if device is charging
        dischargingTime: {
            value: randomNumber(0, 9999),
            configurable: false,
            enumerable: true,
            writable: false
        },
        level: {
            value: randomNumber(0, 2),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();