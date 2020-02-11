import React from 'react';
import PropTypes from 'prop-types';
import { Streak } from './Streak';
import { CorrectAnswer } from './CorrectAnswer';
import { Button } from './Button';

export const GameControls = ({ streak, correctImage, hasGuessed, onLeaderboard, onNext }) => {

  return (
    <>
      <Streak streak={streak}/>
      <CorrectAnswer correctImage={correctImage} hasGuessed={hasGuessed}/>
      <Button label='Leaderboard' onClick={onLeaderboard}/>
      <Button label='Next' onClick={onNext} />
    </>
  );
};

GameControls.propTypes = {
  streak: PropTypes.number.isRequired,
  correctImage: PropTypes.string.isRequired,
  hasGuessed: PropTypes.bool.isRequired,
  onLeaderboard: PropTypes.func.isRequired,
  onNext: PropTypes.func.isRequired
};
