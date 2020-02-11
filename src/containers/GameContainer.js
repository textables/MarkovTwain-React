import React from 'react';
import { Quote } from '../components/Quote';
import { GameControls } from '../components/GameControls';
import { RadioButtons } from '../components/RadioButtons';
import { useGetQuote } from '../hooks/useGetQuote';
import { HighScoreInput } from '../components/HighScoreInput';

export const GameContainer = () => {
  const quoteElement = inGame ? <Quote text={} source={} /> : <HighScoreInput score={} onSubmit={} /> 
  
  return (
    <>
      {quoteElement}
      <GameControls
        streak={}
        correctImage={}
        hasGuessed={}
        onLeaderboard={}
        onNext={} />
      <RadioButtons radiobuttons={} onChange={}/>
    </>
  );
};
