function inject(filePath, callback) {
    var script = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
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
});