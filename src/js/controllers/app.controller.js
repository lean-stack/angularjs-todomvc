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
    $scope.allCompleted = false;

    // Calculated Properties
    $scope.$watch(function () {
      for( var ix = 0; ix < $scope.todos.length; ix++) {
        if( $scope.todos[ix].completed === false) {
          return false;
        }
      }
      return true;
    }, function(state) { $scope.allCompleted = state; });

    // Event Handlers
    $scope.create = function() {
      if ($scope.title.length > 0) {
        var todo = todoStore.addTodo($scope.title);
        $scope.todos.push(todo);
        $scope.title = '';
      }
    }
    $scope.remove = function(todo) {
      todoStore.removeTodo(todo.id);
      $scope.todos.splice($scope.todos.indexOf(todo), 1);
    };
    $scope.syncAll = function() {
      angular.forEach($scope.todos, function (todo) {
        todo.completed = $scope.allCompleted;
        todoStore.updateTodo(todo.id, { completed: $scope.allCompleted });
      });
    }
  }

})();
