import { useState, useEffect } from 'react';
import { getQuote } from '../services/getQuote';
import { checkForHighScore } from '../services/checkForHighScore.js';

export const useGame = () => {
  const [quote, setQuote] = useState({ text: '', source: '', id: '' });
  const [inGame, setInGame] = useState(true);
  const [hasGuessed, setHasGuessed] = useState(false);
  const [streak, setStreak] = useState(0);
  const [correctSource, setCorrectSource] = useState('');
  const [highScore, setHighScore] = useState(0);
  const [isOnLeaderBoard, setIsOnLeaderBoard] = useState(false);

  const onNext = () => {
    if(!inGame) setInGame(true);
    setHasGuessed(false);
    getQuote('')
      .then(res => {
        setQuote(res);
        setCorrectSource(res.id);
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

  const handleEndGame = () => {
    toggleInGame();
    setHighScore(streak);
    setStreak(0);
  };

  const handleGuess = (event) => {
    toggleHasGuessed();
    if(event.target.value === correctSource) incrementStreak();
    else handleEndGame();
  };

  useEffect(() => {
    if(highScore) {
      checkForHighScore(highScore)
        .then(setIsOnLeaderBoard);
    }
  }, [highScore]);

  useEffect(() => {
    onNext();
  }, []);

  return {
    quote,
    correctSource,
    streak,
    highScore,
    hasGuessed,
    inGame, 
    onNext,
    handleGuess,
    isOnLeaderBoard,
  };
};
