import React from 'react';
import { Link } from 'react-router-dom';

export const Nav = () => {

  return (
    <nav>
      <ul>
        <li>Home</li>
        <li><a href="https://twitter.com/markovtwainbot">Twitter</a></li>
        <li>About</li>
      </ul>
    </nav>
  );
};
