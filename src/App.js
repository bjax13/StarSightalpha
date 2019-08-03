
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './Pages/Login'
import Colors from './Pages/Colors'
import Home from './Pages/Home'
import ButtonAppBar from './Components/ButtonAppBar'

class App extends Component {
  render() {
    return (
      <Router>
        <ButtonAppBar/>
        <Route path='/' exact component={Home}/>
        <Route path='/login' component={Login}/>
        <Route path='/colors' component={Colors}/>
      </Router>
    );
  }
}

export default App;
