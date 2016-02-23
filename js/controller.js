angular
  .module('weatherApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http'];
function MainController($http){
  var self = this;
  self.all = [];
  dates = [];

  for ( i = 0; i < 28; i++ ) {
   var randNum = [];
   var a = Math.floor(Math.random() * 11) + 5;
 }
 console.log(randNum)


var b = Math.floor(Math.random() * 11) + 5;

var a = Math.floor(Math.random() * 15) + 11; 

console.log(a)
console.log(b)


  for (i = 0; i <= 5; i++) {
  $http.get("http://wxdata.weather.com/wxdata/weather/local/UKXX0085?CC=*&unit=m&dayf="+i+"",
                      {
                          transformResponse: function (cnv) {
                              var x2js = new X2JS();
                              var aftCnv = x2js.xml_str2json(cnv);
                              return aftCnv;
                          }
                      })
              .success(function (response) {
                self.all = response;
              });
          }
        };
