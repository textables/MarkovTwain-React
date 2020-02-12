import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

export const Streak = ({ streak }) => {
  return (
    <div className={styles.Streak}>
      <h5>Current Streak:</h5>
      <p className={styles.StreakNo}>{streak}</p>
    </div>
  );
};

Streak.propTypes = {
  streak: PropTypes.number.isRequired
};
