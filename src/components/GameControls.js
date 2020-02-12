import React from 'react';
import PropTypes from 'prop-types';
import { Streak } from './Streak';
import { CorrectAnswer } from './CorrectAnswer';
import { Button } from './Button';

export const GameControls = ({ inGame, streak, correctImage, hasGuessed, onNext }) => {

  return (
    <>
      <Streak streak={streak}/>
      <CorrectAnswer correctImage={correctImage} hasGuessed={hasGuessed}/>
      <Button label={ inGame ? 'Next' : 'New Game'} onClick={onNext} />
    </>
  );
};

GameControls.propTypes = {
  streak: PropTypes.number.isRequired,
  correctImage: PropTypes.string,
  hasGuessed: PropTypes.bool.isRequired,
  onNext: PropTypes.func.isRequired,
  inGame: PropTypes.bool.isRequired
};
