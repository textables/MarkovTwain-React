import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QuoteContainer } from '../containers/QuoteContainer';
import { Header } from './Header';
//import { Footer } from './Footer';
import { Nav } from './Nav';
import { AboutUs } from './aboutus/AboutUs';
import './App.css'; 
import { GameContainer } from '../containers/GameContainer';

export default function App() {
  return (
    <Router >
      <Header />
      <Nav />
      <Switch>
        <Route exact path="/" component={QuoteContainer} />
        <Route path="/about" component={AboutUs} />
        <Route path="/game" component={GameContainer} />
      </Switch>
    </Router>
  );
}
