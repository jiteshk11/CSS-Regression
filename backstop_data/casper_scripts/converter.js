
var Converter=require("csvtojson").Converter;

module.exports = function(casper, scenario, vp) {
  casper.echo('converter.js', 'INFO');
  casper.wait(50);

  var Converter = require("csvtojson").Converter;
  var converter = new Converter({});
  converter.fromFile("./file.csv",function(err,result){

});



};
