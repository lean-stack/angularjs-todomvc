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
    var todoIx = findTodoIx(todos, id);

    angular.extend(todos[todoIx], changes);

    localStorage.setItem('todos', JSON.stringify(todos));
    return todos[todoIx];
  }

  TodoStore.prototype.removeTodo = function (id) {
    var todos = this.getAll();
    var todoIx = findTodoIx(todos, id);

    todos.splice(todoIx, 1);

    localStorage.setItem('todos', JSON.stringify(todos));
  };

  function findTodoIx(todos, id) {
    var todoIx = -1;
    for (var ix = 0; ix < todos.length; ix++) {
      if (todos[ix].id === id) {
        todoIx = ix;
        break;
      }
    }
    return todoIx;
  }
})();
