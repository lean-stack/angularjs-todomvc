 import templateUrl from "./views/app.template.html?url"

  angular.module('app')
    .config(configureRouting)

  function configureRouting($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('');

    $routeProvider.
      when('/', {
        templateUrl,
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 0;}
        }
      }).
      when('/active', {
        templateUrl,
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 1;}
        }
      }).
      when('/completed', {
        templateUrl,
        controller: 'AppCtrl',
        resolve: {
          'filter': function() {return 2;}
        }
      }).
      otherwise('/');
  }

