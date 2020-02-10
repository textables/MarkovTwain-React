import React from 'react';
import { QuoteContainer } from '../containers/QuoteContainer';
import { Header } from './Header';
import { Footer } from './Footer';

export default function App() {
  return (
    <>
      <Header />
      <QuoteContainer />
      <Footer />
    </>
  );
}
