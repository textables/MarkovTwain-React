import React from 'react';
import { Quote } from '../components/Quote';
import { RadioButtons } from '../components/RadioButtons';
import { useGetQuote } from '../hooks/useGetQuote';

export const GameContainer = () => {
  return (
    <>
      <Quote />
      
      <RadioButtons />
    </>
  );
};
