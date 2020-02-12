import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.css'

export const Developer = ({ name, linkedin, github, image }) => {
  return (
    <li key={name}>
      <img className={styles.devImage} src={image} />
      <p>{name}</p>
      <section className={styles.aboutLinks}>
        <a href={linkedin}><img className={styles.linkImg} src="http://markovtwain.herokuapp.com/assets/linkedin2.png" /></a>
        <a href={github}><img className={styles.gitImg} src="http://markovtwain.herokuapp.com/assets/github-logo.png" /></a>
      </section>
    </li>
  );
};

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
