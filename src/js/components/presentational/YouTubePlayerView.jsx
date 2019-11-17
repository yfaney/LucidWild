import React from 'react';
import PropTypes from 'prop-types';

import Iframe from './Iframe.jsx';

const propTypes = {
  videoId: PropTypes.string.isRequired,
}

const YouTubePlayerView = (props) => {

  const { videoId } = props;

  return (
    <Iframe
      src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
      height={315}
      width={560}
    />
  )

};

YouTubePlayerView.propTypes = propTypes;

export default YouTubePlayerView;
