import React from 'react';
import PropTypes from 'prop-types';
import styles from './Game.css';

export const Button = ({ label, onClick }) => {
  return (
    <div className={styles.ButtonContainer}>
      <button onClick={onClick}>{label}</button>
    </div>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};
