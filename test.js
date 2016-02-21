var senlp = require('./index.js');

var text = 'This document describes how to query the Sentigem Sentiment Analysis API service for computing text sentiment via a RESTful interface. The service is presently an English only service. HTML/XML tags will be ignored but will contribute to the total character count';

senlp.getSentiment(text, function (err, response) {
  if (!err) {
    // response is -1 if negative, 1 is positive, 0 if neutral
    console.log(response);
  }
});