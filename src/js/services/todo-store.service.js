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

  TodoStore.prototype.updateTodo = function (id, changes) {
    var todos = this.getAll();
    var todo = findTodo(todos, id);

    angular.extend(todo, changes);

    localStorage.setItem('todos', JSON.stringify(todos));
    return todo;
  }

  function findTodo(todos, id) {
    var todo = null;
    for (var ix = 0; ix < todos.length; ix++) {
      if (todos[ix].id === id) {
        todo = todos[ix];
        break;
      }
    }
    return todo;
  }
})();
