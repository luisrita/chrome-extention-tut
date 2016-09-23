var odds = {},
    lines = document.getElementsByClassName('line-bet');

for (var i = 0; i <= lines.length; i++) {
  var thisLine = lines[i];

  console.log(thisLine);
  var event = $(thisLine).find('.event').html().split(',')[0],
      odd = $(thisLine).find('.odd p').html(),
      canceled = $(thisLine).find('.result').hasClass('nofinish'),
      result = $(thisLine).find('.result').hasClass('win') && !canceled ? 'win' : 'lost',
      repeated = false;

  if(event !== 'Futebol') {
    var oddsNumber = odds.length;

    // Get unic values that are on odds
    var objArray = Object.keys(odds);
    objArray.forEach(function (item, index) {
      if(odd === item) {
        if(result === 'win') {
          odds[odd].wins += 1;
        } else {
          odds[odd].loses += 1;
        }

        repeated = true;
      }
    });

    // Push new unic value to odds
    if(!repeated && !canceled) {
      // odds.push(odd);
      odds[odd] = {
        wins: 0,
        loses: 0,
      };

      if(result === 'win') {
        odds[odd].wins += 1;
      } else {
        odds[odd].loses += 1;
      }
    }
  }
};

function calcPercentages() {
  for(var o in odds) {
  var wins = parseInt(odds[o].wins),
      loses = parseInt(odds[o].loses),
      total = wins + loses,
      percentage = (wins/total) * 100;

  console.log( o + ': ' + Math.round(percentage) + '% - total ' + total);
}
}

console.log(odds);
calcPercentages();