chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'let odds = {},' +
              'lines = document.getElementsByClassName("line-bet");' +
          'for (let i = 0; i < lines.length; i++) {' +
            'let thisLine = lines[i],' +
                'event = thisLine.getElementsByClassName("event")[0].innerText.split(",")[0],' +
                'odd = thisLine.getElementsByClassName("odd")[0].querySelector("p").innerText,' +
                'result = thisLine.getElementsByClassName("result")[0].className.split(" ")[1],' +
                'canceled = result === "nofinish" ? true : false,' +
                'repeated = false;' +
            'if(event !== "Futebol" && !canceled) {' +
              // Get unique values that are on the odds
              'let objArray = Object.keys(odds);' +
              'objArray.forEach(function (item, index) {' +
                'if(odd === item) {' +
                  'odds[odd][result] += 1;' +
                  'repeated = true;' +
                '}' +
              '});' +
              // Push new unique value to odds
              'if(!repeated) {' +
                // odds.push(odd);
                'odds[odd] = {' +
                  'win: result === "win" ? 1 : 0,' +
                  'lose: result === "lose" ? 1 : 0' +
                '};' +
              '}' +
            '}' +
          '};' +
          'function calcPercentages() {' +
            'for(let o in odds) {' +
              'let wins = parseInt(odds[o].win),' +
                  'loses = parseInt(odds[o].lose),' +
                  'total = wins + loses,' +
                  'percentage = (wins/total) * 100;' +
              'console.log( o + ": " + Math.round(percentage) + "% - total " + total);' +
            '}' +
          '}' +
          'console.log(odds);' +
          'calcPercentages();'
  });
});