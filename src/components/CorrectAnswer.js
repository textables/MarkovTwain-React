import React from 'react';
import PropTypes from 'prop-types';

export const CorrectAnswer = ({ hasGuessed, correctImage }) => {
  return (
    <img src={hasGuessed ? correctImage : 'http://markovtwain.herokuapp.com/assets/question-mark.png'} />
  );
};

CorrectAnswer.propTypes = {
  hasGuessed: PropTypes.bool.isRequired,
  correctImage: PropTypes.string
};
