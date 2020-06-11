(function(){

  angular.module('todoApp')
    .service('todoStore', TodoStore);

  function TodoStore() {}

  TodoStore.prototype.getAll = function () {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  };

  TodoStore.prototype.addTodo = function (title) {
    var todos = this.getAll();
    var nextId = JSON.parse(localStorage.getItem('lastId') || '0') + 1;

    var todo = { id: nextId, title: title, completed: false };

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
    localStorage.setItem('lastId', nextId);

    return todo;
  };

})();
