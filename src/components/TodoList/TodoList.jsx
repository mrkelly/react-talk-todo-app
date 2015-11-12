import React from 'react';
import { map } from 'lodash';

import TodoItem from '../TodoItem/TodoItem';
import TodoInput from '../TodoInput/TodoInput';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [ ]
    };
    this.onAddTodo = this.onAddTodo.bind(this);
  }

  render() {
    return (
      <div className="row">
        <div className="col-xs-12">
          <ul className="list-group">
            {map(this.state.todos, todo => {
              return (
                <TodoItem key={todo.id} todo={todo} />
              );
            })}
            <TodoInput onAddTodo={this.onAddTodo}/>
          </ul>
        </div>
      </div>
    );
  }

  onAddTodo(todo) {
    this.setState({
      todos: this.state.todos.concat([todo])
    });
  }
}
