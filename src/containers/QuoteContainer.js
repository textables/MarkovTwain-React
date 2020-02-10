import React from 'react';
import { Quote } from '../components/Quote';
import { RadioButtons } from '../components/RadioButtons';
import { useGetQuote } from '../hooks/useGetQuote';

export const QuoteContainer = () => {
  const { sourcequote, setCurrentSource } = useGetQuote('');
  
  const radioButtons = [
    { label: 'Mark Twain', value: '5e1e4ec52d2b701b5aaf022a' },
    { label: 'Jane Austin', value: '5e1e4ec52d2b701b5aaf0226' },
    { label: 'Fyodor Dostoevsky', value: '5e1e4ec52d2b701b5aaf0227' },
    { label: 'Edgar Allan Poe', value: '5e1e4ec52d2b701b5aaf0228' },
    { label: 'Lewis Carrol', value: '5e1e4ec52d2b701b5aaf0229' },
    { label: '?', value: ' ' }
  ];

  return (
    <>
      <Quote />
      <RadioButtons radiobuttons={radioButtons}/>
    </>
  );
};
