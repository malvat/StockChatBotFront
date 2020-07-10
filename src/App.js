import React from 'react';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';  
import NavBar from './NavBar';
import LogBody from './LogBody';
import SignBody from './SignBody';

function App() {

  return (
    <div>
      <NavBar />
      <SignBody />
    </div>

  )
}

export default App;
