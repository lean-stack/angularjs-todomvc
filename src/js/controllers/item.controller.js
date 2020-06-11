(function(){

  angular.module('todoApp')
    .controller('ItemCtrl', ItemController);

  function ItemController($scope, $element, todoStore) {

    // ControllerAs-Pattern
    var vm = this;

    vm.todo = $scope.todo; // inherited, weired
    vm.editMode = false;
    vm.editText = vm.todo.title;

    // Event Handlers
    vm.toggle = function() {
      todoStore.updateTodo(vm.todo.id, { completed: !vm.todo.completed });
    };
    vm.beginEdit = function() {
      vm.editMode = true;

      // TODO: not best practice, better use a directive
      // Hacky way to set the focus "later"
      setTimeout(function() {
        $element.find('.edit').focus();
      },0);
    };
    vm.endEdit = function() {
      if (vm.editMode) {
        vm.editMode = false;
        if (vm.editText.length === 0) {
          $scope.remove(vm.todo);  // inherited, really weired
          return;
        }
        vm.todo.title = vm.editText;
        todoStore.updateTodo(vm.todo.id, { title: vm.editText });
      }
    };
    vm.cancelEdit = function () {
      vm.editMode = false;
      vm.editText = vm.todo.title;
    };
    vm.handleKey = function($ev) {
      if ($ev.which === 13) {
        vm.endEdit();
      } else if ($ev.which === 27) {
        vm.cancelEdit();
      }
    };
  }

})();
