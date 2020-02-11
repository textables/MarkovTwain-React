import React from 'react';
import PropTypes from 'prop-types';

export const Streak = ({ streak }) => {
  return (
    <div className="streak">
      <h5>Streak</h5>
      <p>{streak}</p>
    </div>
  );
};

Streak.propTypes = {
  streak: PropTypes.number.isRequired
};
