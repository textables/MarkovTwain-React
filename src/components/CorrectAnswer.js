import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

export const CorrectAnswer = ({ hasGuessed, correctImage }) => {
  return (
    <div className={styles.CorrectAnswerContainer}>
      <img className={styles.CorrectAnswer} src={hasGuessed ? correctImage : 'http://markovtwain.herokuapp.com/assets/question-mark.png'} />
    </div>
  );
};

CorrectAnswer.propTypes = {
  hasGuessed: PropTypes.bool.isRequired,
  correctImage: PropTypes.string
};
