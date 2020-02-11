import React from 'react';
import { Quote } from '../components/Quote';
import { RadioButtons } from '../components/RadioButtons';
import { useGetQuote } from '../hooks/useGetQuote';

export const QuoteContainer = () => {
  const { sourceQuote, setCurrentSource } = useGetQuote('');

  const changeSource = ({ target }) => {
    setCurrentSource(target.value);
  };
  
  const radioButtons = [
    { label: 'Mark Twain', value: '5e1e4ec52d2b701b5aaf022a', image: 'http://markovtwain.herokuapp.com/assets/twain.png'  },
    { label: 'Jane Austen', value: '5e1e4ec52d2b701b5aaf0226', image: 'http://markovtwain.herokuapp.com/assets/austen.png'  },
    { label: 'Fyodor Dostoevsky', value: '5e1e4ec52d2b701b5aaf0227', image: 'http://markovtwain.herokuapp.com/assets/dostoyevsky.png'  },
    { label: 'Edgar Allan Poe', value: '5e1e4ec52d2b701b5aaf0228', image: 'http://markovtwain.herokuapp.com/assets/poe.png'  },
    { label: 'Lewis Carroll', value: '5e1e4ec52d2b701b5aaf0229', image: 'http://markovtwain.herokuapp.com/assets/carroll.png'  },
    { label: 'Surprise Me', value: ' ', image: 'http://markovtwain.herokuapp.com/assets/question-mark.png' }
  ];

  return (
    <>
      <Quote {...sourceQuote}/>
      <RadioButtons radiobuttons={radioButtons} onChange={changeSource} />
    </>
  );
};
