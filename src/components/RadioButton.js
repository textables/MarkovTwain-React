import React from 'react';
import PropTypes from 'prop-types';
import styles from './RadioButton.css';

export const RadioButton = ({ value, label, onChange, image }) => {
  return (
    <div>
      <input value={value} id={value} type="radio" name="sources" onChange={onChange}/>
      <label htmlFor={value}><img className={label === 'Surprise Me' ? styles.question : ''} src={image}/>{label}</label>
    </div>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  image: PropTypes.string.isRequired
};
