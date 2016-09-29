chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.tabs.executeScript({
    code: 'var odds = {},' +
              'lines = document.getElementById("ended-bets").getElementsByClassName("line-bet");' +

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
                  'lose: result === "lose" ? 1 : 0,' +
                  'calcPercentages: function() {' +
                    'let wins = parseInt(this.win),' +
                        'loses = parseInt(this.lose),' +
                        'total = wins + loses,' +
                        'percentage = (wins/total) * 100;' +
                    'return odd + ": " + Math.round(percentage) + "% - total " + total;' +
                  '}' +
                '};' +
              '}' +
            '}' +
          '};' +

          'for(let o in odds) {' +
            'console.log(odds[o].calcPercentages());' +
          '}' 
  });
});