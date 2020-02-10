import { useEffect, useState } from 'react';
import { getQuote } from '../services/getQuote';

export const useGetQuote = () => {

  const [currentSource, setCurrentSource] = useState(''); 
  const [sourceQuote, setSourceQuote] = useState({});

  useEffect(() => {
    getQuote(currentSource)
      .then(setSourceQuote);
  }, [currentSource]);

  return { sourceQuote, setCurrentSource };
};
