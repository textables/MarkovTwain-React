import React from 'react';
import PropTypes from 'prop-types';
import styles from './Quote.css';

export const Quote = ({ text, source }) => {

  return (
    <section className={styles.quoteBubble}>
      <p>&quot;{text}&quot;  <br/><br/> - {source}</p>
    </section>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};
