import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><a href="https://twitter.com/markovtwainbot">Twitter</a></li>
        <li><Link to="/about">About</Link></li>
      </ul>
    </nav>
  );
};
