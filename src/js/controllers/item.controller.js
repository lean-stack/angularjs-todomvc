(function(){

  angular.module('todoApp')
    .controller('ItemCtrl', ItemController);

  function ItemController($scope, todoStore) {

    // ControllerAs-Pattern
    var vm = this;

    vm.todo = $scope.todo; // inherited

    // Event Handlers
    vm.toggle = function() {
      todoStore.updateTodo(vm.todo.id, { completed: !vm.todo.completed });
    }
  }

})();
