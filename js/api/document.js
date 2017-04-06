(function() {
    'use strict';
    
    var document = window.document;
    
    var modifiedDocument;
    
    // TODO: Check to see if all attributes have been moved
    // TODO: to their respective prototypes since Chrome 43+
    if ('referrer' in Document.prototype) {
        modifiedDocument = Document.prototype;
    }
    else {
        modifiedDocument = Object.create(document);
        
        Object.defineProperty(window, 'document', {
            value: modifiedDocument,
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