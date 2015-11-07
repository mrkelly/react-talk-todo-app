import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);

    this.onRemoveTodo = this.onRemoveTodo.bind(this);
  }

  render() {
    return (
      <li className="list-group-item text-left">
        <button className="btn btn-default btn-xs" onClick={this.onCompleteTodo}>
          <i className="glyphicon glyphicon-ok"></i>
        </button>
        {this.props.todo.description}
        <span className="pull-right">
          <button className="btn btn-default btn-xs" onClick={this.onRemoveTodo}>Remove</button>
        </span>
      </li>
    );
  }

  onRemoveTodo() {
    this.props.onRemoveTodo(this.props.todo);
  }

  onCompleteTodo() {
    this.props.onCompleteTodo(this.props.todo);
  }
}
