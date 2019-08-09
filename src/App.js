import React from 'react';
import Nav from './components/Nav';
import Home from './components/Home';
import News from './components/News';
import Search from './components/Search';
import './App.css';
import { BrowserRouter as Router , Route,  Link, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div id="app">
      <Nav/> 
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/search" component={Search} />
        <Route path="/:category" component={News} />
      </Switch>
    </div>
    </Router>
  );
}

export default App;
