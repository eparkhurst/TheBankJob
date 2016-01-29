app.controller('HomeController', ['$scope', '$http', '$location', function($scope, $http, $location) {

  $http.get('http://thebankjob.herokuapp.com/data').then(function(data) {
    $scope.score = data.data.ranking[0].avg;
    $scope.posts = data.data.posts;
    console.log(data.data.posts);
  });


  $scope.addNewPost = function(post) {
    $http.post('http://thebankjob.herokuapp.com/addpost', {
      post: post.post,
      name: post.name
    }).then(function() {
      $scope.posts.push({
        post: post.post,
        name: post.name
      });
      $scope.post = {};
    });
  };

  $scope.addScore = function() {
    console.log($scope.newScore);
    $http.post('http://thebankjob.herokuapp.com/addrank', {
      score: $scope.newScore
    });
  };
}]);
