import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  respContainer: {
    position: relative,
    overflow: hidden,
    'padding-top': '56.25%',
  },
  respIframe: {
    position: absolute,
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    border: 0,
  },
}));

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

  const classes = useStyles();

  return(         
    <div className={classes.respContainer}>          
      <iframe
        className={classes.respIframe}
        src={src}
        height={height}
        width={width}
        allow="accelerometer; autoplay; muted; encrypted-media; gyroscope; picture-in-picture"
      />
    </div>
  );
}

Iframe.propTypes = propTypes;

export default Iframe;