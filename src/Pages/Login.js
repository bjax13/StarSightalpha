import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import ButtonAppBar from '../Components/ButtonAppBar'

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
