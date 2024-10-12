chrome.browserAction.onClicked.addListener(function(tab) {
  const url = tab.url;
  const prependUrl = "https://freedium.cfd/";

  const newUrl = prependUrl + url;
  chrome.tabs.update(tab.id, { url: newUrl });
});

chrome.commands.onCommand.addListener(function(command) {
  if (command === "prepend-url") {
    chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
      const activeTab = tabs[0];
      const url = activeTab.url;
      const prependUrl = "https://freedium.cfd/";

      const newUrl = prependUrl + url;
      chrome.tabs.update(activeTab.id, { url: newUrl });
    });
  }
});
