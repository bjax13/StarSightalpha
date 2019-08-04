
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login'
import Colors from './Pages/Colors'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import ButtonAppBar from './Components/ButtonAppBar'

class App extends Component {
  render() {
    return (
      <Router>
        <ButtonAppBar/>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/colors' component={Colors}/>
          <Route path="*" component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default App;
