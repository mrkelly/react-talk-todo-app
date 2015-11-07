import { assign, each, values } from 'lodash';

export default class FakeServer {
  constructor() {
    this.todos = {};
  }

  create(todo) {
    assign(todo, {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      complete: false
    });
    this.todos[todo.id] = todo;
    return todo;
  }

  list() {
    return values(this.todos);
  }

  update(id, updates) {
    this.todos[id] = assign({}, this.todos[id], updates);
  }

  updateAll(updates) {
    each(this.todos, (todo, id) => {
        this.update(id, updates);
    });
  }

  remove(id) {
    delete this.todos[id];
  }
}
