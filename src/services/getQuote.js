export const getQuote = (source) => {
  return fetch(`https://markovtwain.herokuapp.com/api/v1/results/${source}`)
    .then(res => res.json())
    .then(({ tweetText, source }) => ({
      text: tweetText,
      source: source.fullName,
      id: source._id
    }));
};
