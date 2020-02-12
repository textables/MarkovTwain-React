export const addNewScore = (highscoreObj) => {
  fetch('https://markovtwain.herokuapp.com/api/v1/highscores', {
    method: 'POST',
    headers: { 
      'Content-Type': 'application/json' 
    },
    body: JSON.stringify(highscoreObj)
  })
    .then(res => res.json())
    .then(res => {
      if(res.name) fetch('https://markovtwain.herokuapp.com/api/v1/highscores/lowest/delete', {
        method: 'DELETE',
        header: { 'Content-Type': 'application/json' }
      });
    });
};

