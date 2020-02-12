import React from 'react';
import { Quote } from '../components/Quote';
import { GameControls } from '../components/GameControls';
import { RadioButtons } from '../components/RadioButtons';
import { HighScoreInput } from '../components/HighScoreInput';
import { useGame } from '../hooks/useGame';

export const GameContainer = () => {
  const { quote, correctSource, streak, highScore, hasGuessed, inGame, onNext, handleGuess, isOnLeaderBoard } = useGame();

  const sourceImageLibrary = {
    '5e1e4ec52d2b701b5aaf022a': 'http://markovtwain.herokuapp.com/assets/twain.png',
    '5e1e4ec52d2b701b5aaf0226': 'http://markovtwain.herokuapp.com/assets/austen.png',
    '5e1e4ec52d2b701b5aaf0227': 'http://markovtwain.herokuapp.com/assets/dostoyevsky.png',
    '5e1e4ec52d2b701b5aaf0228': 'http://markovtwain.herokuapp.com/assets/poe.png',
    '5e1e4ec52d2b701b5aaf0229': 'http://markovtwain.herokuapp.com/assets/carroll.png' 
  };

  const radioButtons = [
    { label: 'Mark Twain', value: '5e1e4ec52d2b701b5aaf022a', image: 'http://markovtwain.herokuapp.com/assets/twain.png'  },
    { label: 'Jane Austen', value: '5e1e4ec52d2b701b5aaf0226', image: 'http://markovtwain.herokuapp.com/assets/austen.png'  },
    { label: 'Fyodor Dostoevsky', value: '5e1e4ec52d2b701b5aaf0227', image: 'http://markovtwain.herokuapp.com/assets/dostoyevsky.png'  },
    { label: 'Edgar Allan Poe', value: '5e1e4ec52d2b701b5aaf0228', image: 'http://markovtwain.herokuapp.com/assets/poe.png'  },
    { label: 'Lewis Carroll', value: '5e1e4ec52d2b701b5aaf0229', image: 'http://markovtwain.herokuapp.com/assets/carroll.png'  }
  ];

  const quoteElement = inGame ? <Quote text={quote.text} source={hasGuessed ? quote.source : '??????'} /> : <HighScoreInput isOnLeaderBoard={isOnLeaderBoard} highScore={highScore} text={quote.text} source={quote.source} />;

  return (
    <>
      {quoteElement}
      <GameControls
        streak={streak}
        inGame={inGame}
        correctImage={sourceImageLibrary[correctSource]}
        hasGuessed={hasGuessed}
        onLeaderboard={() => {}}
        onNext={onNext} />
      <RadioButtons radiobuttons={radioButtons} onChange={handleGuess}/>
    </>
  );
};
