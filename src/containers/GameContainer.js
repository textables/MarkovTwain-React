import React from 'react';
import { Quote } from '../components/Quote';
import { GameControls } from '../components/GameControls';
import { RadioButtons } from '../components/RadioButtons';
import { useGetQuote } from '../hooks/useGetQuote';

export const GameContainer = () => {
  return (
    <>
      <Quote />
      <GameControls />
      <RadioButtons />
    </>
  );
};
