import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'react-chat-widget/lib/styles.css';  
import LogBody from './LogBody';
import SignBody from './SignBody';
import Dashboard from './Dashboard';
import Home from './Home';

function App() {

  return (
    <Router>
      <Switch>  
        <Route path="/login">
          <LogBody />
        </Route>
        <Route path="/signup">
          <SignBody />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
