import AppDispatcher from '../dispatcher/AppDispatcher';
import {
  TODO_LIST,
  TODO_CREATE,
  TODO_UPDATE,
  TODO_REMOVE
} from '../constants/TodoConstants';

class TodoActions {
  list() {
    AppDispatcher.dispatch({
      actionType: TODO_LIST
    });
  }

  create(todo) {
    AppDispatcher.dispatch({
      actionType: TODO_CREATE,
      payload: todo
    });
  }

  update(todo) {
    AppDispatcher.dispatch({
      actionType: TODO_UPDATE,
      payload: todo
    });
  }

  remove(todo) {
    AppDispatcher.dispatch({
      actionType: TODO_REMOVE,
      payload: todo
    });
  }
}

export default new TodoActions();
