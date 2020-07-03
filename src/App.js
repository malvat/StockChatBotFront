import React, { useEffect } from 'react';
import './App.css';
import { Widget, addResponseMessage } from 'react-chat-widget';
import 'react-chat-widget/lib/styles.css';
import { render } from '@testing-library/react';

const handleNewUserMessage = (newMessage) => {
  console.log(newMessage);
  addResponseMessage("hi ");

};

function App() {

  return <Widget handleNewUserMessage={ handleNewUserMessage } />;
}

export default App;
