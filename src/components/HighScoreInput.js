import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

export const HighScoreInput = ({ score, onSubmit }) => {

  const [name, setState] = useState('AAA');

  return (
    <section className={styles.quoteBubble}>
      <p>You scored: {score}</p>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={(e) => setState(e.target.value)} maxLength="3"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

HighScoreInput.propTypes = {
  score: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired
};
