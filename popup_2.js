function getStats() {
  chrome.tabs.executeScript(null, {file: 'popup.js'});
};

function init() {
  var checkButton = document.getElementById('getStats');
  checkButton.addEventListener('click', getStats);
}

document.addEventListener('DOMContentLoaded', init);