import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './App.css';
import 'react-chat-widget/lib/styles.css';  
import LogBody from './LogBody';
import SignBody from './SignBody';
import Home from './Dashboard/Home';
import BuyStock from './Dashboard/BuyStock';
import SellStock from './Dashboard/SellStock';
import About from './Dashboard/About';
import Title from './Title';

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
        <Route path="/dashboard/home">
          <Home />
        </Route>
        <Route path="/dashboard/buystock">
          <BuyStock />
        </Route>
        <Route path="/dashboard/sellstock">
          <SellStock />
        </Route>
        <Route path="/dashboard/aboutus">
          <About />
        </Route>
        <Route path="/">
          <Title />
        </Route>
      </Switch>
    </Router>

  )
}

export default App;
