import { isUndefined } from 'lodash';
import { EventEmitter } from 'events';
import AppDispatcher from '../dispatcher/AppDispatcher';

const CHANGE_EVENT = 'CHANGE_EVENT';

export default class BaseStore extends EventEmitter {
  constructor(...args) {
    super(...args);

    this.state = {};
  }

  register(events) {
    AppDispatcher.register(action => {
      let promise = events[action.actionType];

      if (!isUndefined(promise)) {
        promise.apply(this, [action.payload]).then(() => {
          this.emitChange();
        });
      }

      return true;
    });
  }

  getState() {
    return this.state;
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}
