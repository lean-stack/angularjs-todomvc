(function () {

  angular.module('todoApp')
    .config(configureRouting)

  function configureRouting($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
      when('/', {
        templateUrl: 'js/controllers/app.template.html',
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 0;}
        }
      }).
      when('/active', {
        templateUrl: 'js/controllers/app.template.html',
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 1;}
        }
      }).
      when('/completed', {
        templateUrl: 'js/controllers/app.template.html',
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 2;}
        }
      }).
      otherwise('/');
  }

})();
