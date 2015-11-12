import { assign, each, values } from 'lodash';

export default class FakeServer {
  constructor() {
    this.todos = { };
  }

  list() {
    return values(this.todos);
  }

  create(todo) {
    assign(todo, {
      id: (+new Date() + Math.floor(Math.random() * 999999)).toString(36),
      complete: false
    });
    this.todos[todo.id] = todo;
    return todo;
  }

  remove(id) {
    delete this.todos[id];
  }
}
