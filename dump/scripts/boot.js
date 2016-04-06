angular.module('iowikiConfig').config(['$routeProvider', '$locationProvider',
  function($routeProvider, $locationProvider) {
    $routeProvider.
    when('/home', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    }).
    otherwise({
      redirectTo: '/home'
    });
  }
])