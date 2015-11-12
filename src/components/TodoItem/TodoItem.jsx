import React from 'react';

export default class TodoItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li className="list-group-item text-left">
        <span>{this.props.todo.description}</span>
      </li>
    );
  }
}
