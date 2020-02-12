import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';
import { addNewScore } from '../services/addNewScore';

export const HighScoreInput = ({ isOnLeaderBoard, highScore, text, source }) => {

  const [name, setState] = useState('AAA');

  const onSubmit = (event) => {
    event.preventDefault();
    addNewScore({
      name: name,
      score: highScore
    });
  };

  const form = isOnLeaderBoard ? (<form onSubmit={onSubmit}>
    <input type="text" value={name} onChange={(e) => setState(e.target.value)} maxLength="3"></input>
    <button type="submit">Submit</button>
  </form>) : <span></span>;

  return (
    <section className={styles.quoteBubble}>
      <p>&quot;{text}&quot;  <br/><br/> - {source}</p>
      <p>You scored: {highScore}</p>
      {form}
    </section>
  );
};

HighScoreInput.propTypes = {
  highScore: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  isOnLeaderBoard: PropTypes.bool.isRequired

};
