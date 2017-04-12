function inject(filePath, callback) {
    var script = document.createElement('script');
    script.src = chrome.extension.getURL(filePath);
    script.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(script);
    
    callback();
}

inject("js/random.js", function() {
    inject("js/api/document.js", function() {
        console.log("[INFO] Injected Document API ...");
    });
    inject("js/api/navigator.js", function() {
        console.log("[INFO] Injected Navigator API ...");
    });
    inject("js/api/canvas.js", function() {
        console.log("[INFO] Injected Canvas API ...")
    });
});