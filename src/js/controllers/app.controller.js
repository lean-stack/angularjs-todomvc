(function(){

  angular.module('todoApp')
    .controller('AppCtrl', AppController);

  function AppController($scope, todoStore) {

    // TODO: Not best practice, better use a directive
    // We need to focus, cause auto-focussing is blocked by browser due to anchor routes
    document.querySelector('.new-todo').focus();

    $scope.todos = todoStore.getAll();
  }

})();
