import React from 'react';
import PropTypes from 'prop-types';
import { RadioButton } from './RadioButton';
import styles from './RadioButtons.css';

export const RadioButtons = ({ radiobuttons, onChange }) => {

  const radioButtonElements = radiobuttons.map(({ value, label, image }) => (
    <RadioButton key={value} name="sources" value={value} image={image} label={label} onChange={onChange} />
  ));

  return (
    <section>{radioButtonElements}</section>
  );
};

RadioButtons.propTypes = {
  radiobuttons: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
};
