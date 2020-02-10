import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { QuoteContainer } from '../containers/QuoteContainer';
import { Header } from './Header';
import { Footer } from './Footer';
import { Nav } from './Nav';

export default function App() {
  return (
    <Router>
      <Header />
      <Nav />
      <Switch>
        <Route path="/" component={QuoteContainer} />
      </Switch>
      <Footer />
    </Router>
  );
}
