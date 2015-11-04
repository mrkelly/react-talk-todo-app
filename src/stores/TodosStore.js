import BaseStore from './BaseStore';
import AppDispatcher from '../dispatcher/AppDispatcher';

import {
  TODOS_UPDATED
} from '../constants/AppConstants';

class TodosStore extends BaseStore {

  emitChange() {
    this.emit(TODOS_UPDATED);
  }

  addChangeListener(callback) {
    this.on(TODOS_UPDATED, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(TODOS_UPDATED, callback);
  }
}

let store = new TodosStore();

AppDispatcher.register((action) => {
  switch(action.actionType) {
    case ITEMS_GET_SUCCESS:
      store.setAll(action.todos);
      break;
    default:
  }
});

export default store;
