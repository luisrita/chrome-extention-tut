chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'console.log(document.getElementsByClassName("line-bet"))'
  });
});