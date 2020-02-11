import React from 'react';
import { Quote } from '../components/Quote';
import { GameControls } from '../components/GameControls';
import { RadioButtons } from '../components/RadioButtons';
import { HighScoreInput } from '../components/HighScoreInput';
import { useGame } from '../hooks/useGame';

export const GameContainer = () => {
  const { quote, correctSource, streak, hasGuessed, inGame, onNext, toggleInGame, toggleHasGuessed, incrementStreak } = useGame();

  const sourceImageLibrary = {
    '5e1e4ec52d2b701b5aaf022a': 'http://markovtwain.herokuapp.com/assets/twain.png',
    '5e1e4ec52d2b701b5aaf0226': 'http://markovtwain.herokuapp.com/assets/austen.png',
    '5e1e4ec52d2b701b5aaf0227': 'http://markovtwain.herokuapp.com/assets/dostoyevsky.png',
    '5e1e4ec52d2b701b5aaf0228': 'http://markovtwain.herokuapp.com/assets/poe.png',
    '5e1e4ec52d2b701b5aaf0229': 'http://markovtwain.herokuapp.com/assets/carroll.png' 
  };

  const handleGuess = (event) => {
    toggleHasGuessed();
    if(event.target.value === correctSource) incrementStreak();
    else toggleInGame();
  };

  const quoteElement = inGame ? <Quote {...quote} /> : <HighScoreInput streak={streak} onSubmit={''} />;

  return (
    <>
      {quoteElement}
      <GameControls
        streak={streak}
        correctImage={sourceImageLibrary[correctSource]}
        hasGuessed={hasGuessed}
        onLeaderboard={''}
        onNext={onNext} />
      <RadioButtons radiobuttons={[]} onChange={handleGuess}/>
    </>
  );
};
