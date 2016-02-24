angular
  .module('weatherApp')
  .controller('MainController', MainController);

MainController.$inject = ['$http'];
  function MainController($http){
    var self = this;
    self.all = [];
    self.rand = "";
    self.randL = "";

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

  function randHigh() {
    var arr = [];
    for (i = 0; arr.length < 29; i++) {
     i = Math.floor(Math.random() * 11 | 0) + 15
     arr.push(i);
   }
   var sum = arr.reduce(function(a, b) { return a + b; }, 0);
   self.rand = Math.floor(sum/arr.length);
  }
  randHigh();

  function randLow() {
    var arr = [];
    for (i = 0; arr.length < 29; i++) {
     i = Math.floor(Math.random() * 11 | 0) + 5
     arr.push(i);
   }
   var sum = arr.reduce(function(a, b) { return a + b; }, 0);
   self.randL = Math.floor(sum/arr.length);
  }
  randLow();


};



