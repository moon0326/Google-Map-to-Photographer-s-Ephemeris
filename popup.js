function isGoogleMap(url) {
    return url.indexOf("https://www.google.com/maps") === 0;
}

function extractGpsCoordinates(url) {
    return /@([0-9]+.[0-9]+,-[0-9]+.[0-9]+)/.exec(url)[1];
}

chrome.browserAction.onClicked.addListener(function(tab) { 
    if (isGoogleMap(tab.url)) {
        var coordinates = extractGpsCoordinates(tab.url);
        var url = "http://app.photoephemeris.com/?ll=" + coordinates;
        chrome.windows.create({
            url: url
        });
    }
});
