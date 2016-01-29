var app = angular.module("bankJobApp", ['ngRoute'])

.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/home.html',
    controller: 'HomeController'
  })
  .when('/comments/', {
    templateUrl: 'partials/comments.html',
    controller: 'HomeController'
  })
  .when('/cast/', {
    templateUrl: 'partials/cast.html',
    controller: 'CastController'
  })
  .when('/photo/', {
    templateUrl: 'partials/photos.html',
    controller: 'PhotosController'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);
