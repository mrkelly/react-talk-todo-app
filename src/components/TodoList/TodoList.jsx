import React from 'react';
import { map } from 'lodash';

import TodoStore from '../../stores/TodosStore';
import TodoItem from '../TodoItem/TodoItem';
import TodoInput from '../TodoInput/TodoInput';
import TodoActions from '../../actions/TodoActions';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.onStoreChange = this.onStoreChange.bind(this);
    this.state = TodoStore.getState();
  }

  componentDidMount() {
    TodoStore.addChangeListener(this.onStoreChange);
    if (this.state.todos.length > 1) {
      TodoActions.list();
    }
  }

  componentWillUnmount () {
    TodoStore.removeChangeListener(this.onStoreChange);
  }

  onStoreChange() {
    this.setState(TodoStore.getState());
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="list-group">
            {map(this.state.todos, todo => {
              return (
                <TodoItem key={todo.id} todo={todo}
                  onRemoveTodo={this.onRemoveTodo}
                  onCompleteTodo={this.onCompleteTodo}/>
              );
            })}
            <TodoInput onAddTodo={this.onAddTodo}/>
          </ul>
        </div>
      </div>
    );
  }

  onAddTodo(todo) {
    TodoActions.create(todo);
  }

  onRemoveTodo(todo) {
    TodoActions.remove(todo);
  }

  onCompleteTodo(todo) {
    todo.complete = true;
    TodoActions.update(todo);
  }
}
