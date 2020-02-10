import React from 'react';
import PropTypes from 'prop-types';

export const Quote = ({ text, source }) => {

  return (
    <section>
      <p>&quot;{text}&quot; - {source}</p>
    </section>
  );
};

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired
};
