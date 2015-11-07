import { without, findIndex } from 'lodash';
import FakeServer from '../util/FakeServer';
import BaseStore from './BaseStore';
import Q from 'q';
import {
  TODO_LIST,
  TODO_CREATE,
  TODO_REMOVE
} from '../constants/TodoConstants';

let server = new FakeServer();

class TodoStore extends BaseStore {

  constructor(...args) {
    super(...args);

    this.state.todos = [];

    let events = {};
    events[TODO_LIST] = this.list;
    events[TODO_CREATE] = this.create;
    events[TODO_REMOVE] = this.remove;

    this.register(events);
  }

  list() {
    return Q.resolve(server.list())
      .then(todos => {
        this.state.todos = todos;
      });
  }

  create(todo) {
    return Q.resolve(server.create(todo))
      .then(newTodo => {
        this.state.todos.push(newTodo);
      });
  }

  update(todo) {
    return Q.resolve(server.update(todo))
      .then(updatedTodo => {
        let foundIndex = findIndex(this.state.todos, {id: todo.id});
        this.state.todos[foundIndex] = updatedTodo;
      });
  }

  remove(todo) {
    return Q.resolve(server.remove(todo.id))
      .then(() => {
        this.state.todos = without(this.state.todos, todo);
      });
  }
}

export default new TodoStore();
