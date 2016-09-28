var odds = {},
    lines = document.getElementsByClassName('line-bet');

for (var i = 0; i <= lines.length; i++) {
  var thisLine = lines[i];

  console.log(lines[i]);
  var event = $(thisLine).find('.event').html().split(',')[0],
      odd = $(thisLine).find('.odd p').html(),
      canceled = $(thisLine).find('.result').hasClass('nofinish'),
      result = $(thisLine).find('.result').hasClass('win') && !canceled ? 'win' : 'lost',
      repeated = false;

  if(event !== 'Futebol') {

    // Get unique values that are on the odds
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

    // Push new unique value to odds
    if(!repeated && !canceled) {
      // odds.push(odd);
      odds[odd] = {
        wins: result === 'win' ? 1 : 0,
        loses: result === 'lose' ? 1 : 0,
      };
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


var odds = {},
    lines = document.getElementsByClassName('line-bet');

for (var i = 0; i <= lines.length; i++) {
  var thisLine = lines[i];
  var event = thisLine.getElementsByClassName('event')[0].innerText.split(',')[0];

  console.log(event);
};