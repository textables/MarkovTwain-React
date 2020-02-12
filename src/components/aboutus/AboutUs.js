import React from 'react';
import { Developer } from './Developer';
import developerArray from './developers';
import styles from  './About.css';

export const AboutUs = () => {

  const developerElements = developerArray.map((dev) => {
    return <Developer key={dev.name} {...dev} />;
  });
  
  return (
    <section className={styles.About}>
      <h2>About Markov Twain</h2>
      <p><strong>Markov Twain</strong> creates the best new quotes from the oldest deadest authors, using the mathmatical system known as a <strong>Markov Chain</strong>. The creators choose these five specific writers for their unique styles, strong personalities, and clear voices. You can find a new randomly generated quote published every three hours over on Twitter <a href="https://twitter.com/markovtwain"><strong>@markovtwainbot</strong></a></p>
      <h2>About the Developers</h2> 
      <ul>
        {developerElements}
      </ul>
    </section>
  );
};
