var request = require('request');
var qs = require('querystring');

function senlp() {
  this.apiKey = '81d5984784850d4476a9252c08602347Qw6hEVcGK3tgHfSmB1TibpLaFPYOxevD';
}

senlp.prototype.getSentiment = function (article, callback) {
  var url = 'https://api.sentigem.com/external/get-sentiment?api-key=' +
    this.apiKey + '&' +
    qs.stringify({
      text: article
    });
  request.get(url, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      var result = JSON.parse(body);
      if (result.polarity === 'positive') {
        callback(error, 1);
      } else if (result.polarity === 'neutral') {
        callback(error, 0);
      } else if (result.polarity === 'negative') {
        callback(error, -1);
      } else {
        console.error(result.errors);
        callback(error, 0);
      }
    }
  });
}

module.exports = senlp;