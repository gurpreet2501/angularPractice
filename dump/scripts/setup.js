angular.module('iowikiControllers', []);
angular.module('iowikiFactories', []);
angular.module('iowikiDirectives', []);
angular.module('iowikiConfig', []);

angular.module('iowiki', [
  'ngRoute', 'iowikiControllers', 'iowikiFactories', 'iowikiDirectives', 'iowikiConfig'
]);