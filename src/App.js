
import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import fire from './fire';
import Login from './Pages/Login'
import Colors from './Pages/Colors'
import Home from './Pages/Home'
import ButtonAppBar from './Components/ButtonAppBar'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount(){
    /* Create reference to messages in Firebase Database */
    let messagesRef = fire.database().ref('messages').orderByKey().limitToLast(100);
    messagesRef.on('child_added', snapshot => {
      /* Update React state when message is added at Firebase Database */
      let message = { text: snapshot.val(), id: snapshot.key };
      this.setState({ messages: [message].concat(this.state.messages) });
    })
  }
  addMessage(e){
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire.database().ref('messages').push( this.inputEl.value );
    this.inputEl.value = ''; // <- clear the input
  }
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
