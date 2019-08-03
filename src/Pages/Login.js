import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }

  render() {
    return (
      <div>
       Login Page
      </div>
    );
  }
}

export default Login;
