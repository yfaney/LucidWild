import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  src: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  width: PropTypes.number.isRequired,
};

const Iframe = (props) => {
  const {
    src,
    height,
    width,
  } = props;
  return(         
    <div>          
      <iframe
        src={src}
        height={height}
        width={width}
        frameborder="0"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      />
    </div>
  );
}

Iframe.propTypes = propTypes;

export default Iframe;