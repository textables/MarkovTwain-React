import React from 'react';
import PropTypes from 'prop-types';

export const CorrectAnswer = ({ hasGuessed, correctImage }) => {
  return (
    <img src={hasGuessed ? correctImage : 'PATH'} />
  );
};

CorrectAnswer.propTypes = {
  hasGuessed: PropTypes.bool.isRequired,
  correctImage: PropTypes.string.isRequired
};
