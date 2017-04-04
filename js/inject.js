function inject(filePath, callback) {
    var s = document.createElement('script');
    // TODO: add "script.js" to web_accessible_resources in manifest.json
    s.src = chrome.extension.getURL(filePath);
    s.onload = function() {
        this.remove();
    };
    (document.head || document.documentElement).appendChild(s);
    
    callback();
}

inject("js/random.js", function() {
    inject("js/api/navigator.js", function() {
        console.log("[INFO] Injected Navigator API ...");
    });
});