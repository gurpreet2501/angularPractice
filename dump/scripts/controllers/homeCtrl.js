angular.module('iowikiControllers').controller('homeCtrl', ['$scope', 'popularPosts',

  function($scope, popularPosts) {

    $scope.data = popularPosts.getPosts();
    $scope.post = $scope.data.post;

  }
]);