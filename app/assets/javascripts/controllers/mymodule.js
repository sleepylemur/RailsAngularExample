//= require angular
//= require angular-route

angular.module('mymodule', ['ngRoute'])
  .controller('mycontroller', function($scope,$location) {
    $scope.user = {name: 'dave'};
    $scope.go1 = function() {
      $location.path('route1');
    }
    $scope.go2 = function() {
      $location.path('route2');
    }
  })

  .controller('controllerA', function($scope,$http) {
    $scope.msg = 'hey';
    $scope.grab = function() {
      $http.get("http://localhost:3000/pizza")
        .success(function(data) {
          $scope.result = data;
        })
        .error(function(data) {
          alert(JSON.stringify(data));
        });
    };
  })

  .controller('controllerB', function($scope) {
    $scope.msg = 'yo';
  })

  .config(function($routeProvider) {
    $routeProvider
      .when('/route1', {
        templateUrl: '/assets/views/template1.html',
        controller: 'controllerA'
      })
      .when('/route2', {
        templateUrl: '/assets/views/template2.html',
        controller: 'controllerB'
      });
    });