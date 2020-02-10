import React from 'react';
import PropTypes from 'prop-types';

export const Developer = ({ name, linkedin, github, image }) => {
  return (
    <li key={name}>
      <img src={image} />
      <p>{name}</p>
      <a href={linkedin}><img src="http://markovtwain.herokuapp.com/assets/linkedin2.png" /></a>
      <a href={github}><img src="http://markovtwain.herokuapp.com/assets/github-logo.png" /></a>
    </li>
  );
};

Developer.propTypes = {
  name: PropTypes.string.isRequired,
  linkedin: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};
