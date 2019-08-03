import React, { Component } from 'react';

class Colors extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }

  render() {
    return (
      <div>
       Colors Page
      </div>
    );
  }
}

export default Colors;
