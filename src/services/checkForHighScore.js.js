export const checkForHighScore = (newScore) => {
  return fetch('https://markovtwain.herokuapp.com/api/v1/highscores/lowest', {
    method: 'GET',
    header: { 'Content-Type': 'application/json' }
  })
    .then(res => res.json())
    .then(lowestHighScore => {
      let isNewScoreHigher = false;
      if(newScore > lowestHighScore.score) isNewScoreHigher = true;
      return isNewScoreHigher;
    });
};
