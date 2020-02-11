import { useState, useEffect } from 'react-router-dom';
import { getQuote } from '../services/getQuote';

export const useGame = () => {
  const [quote, setQuote] = useState({});
  const [inGame, setInGame] = useState(true);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [correctSource, setCorrectSource] = useState('');

  const onNext = () => {
    getQuote()
      .then(res => {
        setQuote(res);
        setCorrectSource(res.source);
      });
  };

  const toggleInGame = () => {
    setInGame(state => !state);
  };

  const toggleHasGuessed = () => {
    setHasGuessed(state => !state);
  };

  const incrementStreak = () => {
    setStreak(previousStreak => previousStreak + 1);
  };

  useEffect(() => {
    onNext();
  }, []);

  return {
    quote,
    correctSource,
    streak,
    hasGuessed,
    inGame, 
    onNext,
    toggleInGame,
    toggleHasGuessed,
    incrementStreak
  };
};
