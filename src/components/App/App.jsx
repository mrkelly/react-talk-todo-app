import React from 'react';
import TodoList from '../TodoList/TodoList';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1 className="">Todos</h1>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-xs-offset-3 text-center">
            <TodoList/>
          </div>
        </div>
      </div>
    );
  }
}
