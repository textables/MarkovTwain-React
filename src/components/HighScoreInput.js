import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

export const HighScoreInput = ({ highScore, onSubmit, text, source }) => {

  const [name, setState] = useState('AAA');

  return (
    <section className={styles.quoteBubble}>
      <p>&quot;{text}&quot;  <br/><br/> - {source}</p>
      <p>You scored: {highScore}</p>
      <form onSubmit={onSubmit}>
        <input type="text" value={name} onChange={(e) => setState(e.target.value)} maxLength="3"></input>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

HighScoreInput.propTypes = {
  highScore: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired

};
