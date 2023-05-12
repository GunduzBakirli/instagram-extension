chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  console.log(changeInfo);
  if (changeInfo.url) {
    chrome.tabs.sendMessage(tabId, {
      message: "changed",
      url: changeInfo.url,
    });
  }
});
