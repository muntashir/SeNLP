var fs = require('fs');
var recurrentjs = fs.readFileSync(__dirname + '/recurrentjs/recurrent.js', 'utf8');
var vis = fs.readFileSync(__dirname + '/recurrentjs/vis.js', 'utf8');
eval(recurrentjs);
eval(vis);

function senlp() {
 
}

module.exports = senlp;