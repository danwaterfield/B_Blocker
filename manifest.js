{
    "name": "Burney Blocker",
    "version": "1.0",
    "description": "A simple productivity extension. Each day asks you for a list of things you need to do. Blocks n websites. Unblocks if you read and re-type that list.",
    "manifest_version": 2,

     "background": {
        "scripts": [
            "js/es6-promise.auto.min.js",
            "js/defaults.js",
            "js/speech.js",
            "js/document.js",
            "js/events.js",
            "js/stt.js",
            "js/listen.js"
        ],
        "persistent": false
    }
}