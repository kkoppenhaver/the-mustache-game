// When the extension is installed or upgraded ...
chrome.runtime.onInstalled.addListener(function() {
  // Replace all rules ...
  chrome.declarativeContent.onPageChanged.removeRules(undefined, function() {
    // With a new rule ...
    chrome.declarativeContent.onPageChanged.addRules([
      {
        // That fires when a page's URL is netflix or youtube ...
        conditions: [
          new chrome.declarativeContent.PageStateMatcher({
            pageUrl: { 
                urlMatches: '(netflix|youtube)\.com'
            }
          })
        ],
        // And shows the extension's page action.
        actions: [ new chrome.declarativeContent.ShowPageAction() ]
      }
    ]);
  });
});

chrome.pageAction.onClicked.addListener(function (tab) { //Fired when User Clicks the Icon
   	chrome.tabs.executeScript(null, {file: "jquery.min.js"});
    chrome.tabs.executeScript(null, {file: "extension.js"});
});