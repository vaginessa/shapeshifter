(function(){
    var screen = window.screen;
    
    var modifiedScreen;
    
    if ('colorDepth' in Screen.prototype) {
        modifiedScreen = Screen.prototype;
    }
    else {
        modifiedScreen = Object.create(screen);
        
        Object.defineProperty(window, 'screen', {
            value: modifiedScreen,
            configurable: false,
            enumerable: false,
            writable: false
        });
    }
    
    Object.defineProperties(modifiedDocument, {
        referrer: {
            value: randomString(32, "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"),
            configurable: false,
            enumerable: true,
            writable: false
        }
    });
})();