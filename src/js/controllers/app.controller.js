(function(){

  angular.module('todoApp')
    .controller('AppCtrl', AppController);

  function AppController($scope, todoStore) {

    // TODO: Not best practice, better use a directive
    // We need to focus, cause auto-focussing is blocked by browser due to anchor routes
    document.querySelector('.new-todo').focus();

    // Properties
    $scope.title = '';
    $scope.todos = todoStore.getAll();

    // Event Handlers
    $scope.create = function() {
      if ($scope.title.length > 0) {
        var todo = todoStore.addTodo($scope.title);
        $scope.todos.push(todo);
        $scope.title = '';
      }
    }
  }

})();
