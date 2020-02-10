import React from 'react';
import PropTypes from 'prop-types';

export const RadioButton = ({ value, label, onChange }) => {
  return (
    <>
      <input value={value} id={value} type="radio" name="sources" onChange={onChange}/>
      <label htmlFor={value}>{label}</label>
    </>
  );
};

RadioButton.propTypes = {
  value: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};
