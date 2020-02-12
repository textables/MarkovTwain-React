import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';
import styles2 from './Game.css';

export const HighScoreInput = ({ highScore, text, source }) => {

  return (
    <div className={styles2.gameQuoteBubble}>
      <section className={styles.quoteBubble}>
        <p className={styles2.gameQuote}>&quot;{text}&quot;  <br/><br/> - {source}</p>
        <p className={styles2.endScore}>You scored: {highScore}</p>
      </section>
    </div>
  );
};

HighScoreInput.propTypes = {
  highScore: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired

};
