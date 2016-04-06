angular.module('iowikiFactories').factory('popularPosts', [

  function() {
    var fac = {
      getPosts: function() {
        return {
          post: "Angular is nice framework"
        };
      }
    }
    return fac;
  }
]);