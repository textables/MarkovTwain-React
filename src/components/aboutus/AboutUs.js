import React from 'react';
import { Developer } from './Developer';
import developerArray from './developers';

export const AboutUs = () => {

  const developerElements = developerArray.map((dev) => {
    return <Developer key={dev.name} {...dev} />;
  });
  
  return (
    <section>
      <h2>About Markov Twain</h2>
      <p>Markov Twain creates the best new quotes from the oldest deadest authors, (oh… and also Kanye), using the mathmatical system known as a Markov Chain. The creators choose these six specific writers for their unique styles, strong personalities, and clear voices. You can find a new randomly generated quote published every three hours over on Twitter @markovtwainbot</p>
      <h2>About the Developers</h2>
      <ul>
        {developerElements}
      </ul>
    </section>
  );
};
