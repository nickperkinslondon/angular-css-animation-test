var app;

app = angular.module('test_angular_animation', ['ngAnimate']);

app.controller('mycontroller', function($scope, $timeout) {
  var add, i, remove, _i, _results;
  $scope.things = [];
  add = $scope.add = function(r) {
    var newthing;
    if (r == null) {
      r = Math.random();
    }
    newthing = String(r).substr(2, 5);
    $scope.things.push(newthing);
    return $scope.things.sort();
  };
  remove = $scope.remove = function(x) {
    var i;
    if (x != null) {
      i = $scope.things.indexOf(x);
    } else {
      i = Math.floor(Math.random() * $scope.things.length);
    }
    return $scope.things.splice(i, 1);
  };
  $timeout(function() {
    return $scope.h1 = true;
  }, 2000);
  _results = [];
  for (i = _i = 1; _i <= 9; i = ++_i) {
    _results.push($timeout(add, i * 200));
  }
  return _results;
});
