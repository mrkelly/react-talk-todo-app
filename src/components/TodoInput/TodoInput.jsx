import React from 'react';

export default class TodoInput extends React.Component {
  constructor(props) {
    super(props);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  render() {
    return (
      <li className="list-group-item">
        <input type="text" className="form-control" placeholder="Something to do"
          onKeyDown={this.onKeyDown}/>
      </li>
    );
  }

  onKeyDown(event) {
    if (event.key === 'Enter') {
      this.onSubmit(event.target);
    }
  }

  onSubmit(target) {
    if (target.value === '') {
      return;
    }
    this.props.onAddTodo({
      description: target.value
    });
    target.value = '';
  }
}
