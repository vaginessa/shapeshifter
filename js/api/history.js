(function() {
    'use strict';
    
    var history = window.history;
    
    var modifiedHistory;
    
    // TODO: Check to see if all attributes have been moved
    // TODO: to their respective prototypes since Chrome 43+
    if ('length' in History.prototype) {
        modifiedHistory = History.prototype;
    }
    else {
        modifiedHistory = Object.create(history);
        
        Object.defineProperty(window, 'history', {
            value: modifiedHistory,
            configurable: false,
            enumerable: false,
            writable: false
        });
    }
    
    Object.defineProperties(modifiedHistory, {
        length: {
            value: randomNumber(0, 256),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();