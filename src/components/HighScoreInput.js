import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

export const HighScoreInput = ({ highScore, text, source }) => {

  return (
    <section className={styles.quoteBubble}>
      <p>&quot;{text}&quot;  <br/><br/> - {source}</p>
      <p>You scored: {highScore}</p>
    </section>
  );
};

HighScoreInput.propTypes = {
  highScore: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired

};
