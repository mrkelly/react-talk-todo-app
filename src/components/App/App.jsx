import React from 'react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 text-center">
            <h1>Hello World!</h1>
          </div>
        </div>
      </div>
    );
  }
}
