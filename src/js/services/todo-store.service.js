(function(){

  angular.module('todoApp')
    .service('todoStore', TodoStore);

  function TodoStore() {}

  TodoStore.prototype.getAll = function () {
    return JSON.parse(localStorage.getItem('todos') || '[]');
  };

})();
