import { useEffect, useState } from 'react';
import { getQuote } from '../services/getQuote';

export const useGetQuote = () => {
  const [fetch, setFetch] = useState(true);
  const [currentSource, setCurrentSource] = useState(''); 
  const [sourceQuote, setSourceQuote] = useState({ text: '', source: '' });

  useEffect(() => {
    getQuote(currentSource)
      .then(setSourceQuote);
  }, [currentSource, fetch]);

  const changeSource = ({ target }) => {
    setFetch(fetch => !fetch);
    setCurrentSource(target.value);
  };

  return { sourceQuote, changeSource };
};
