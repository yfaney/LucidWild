import React from 'react';
import PropTypes from 'prop-types';

import Iframe from './Iframe';

const propTypes = {
  videoId: PropTypes.string.isRequired,
}

const YouTubePlayerView = (props) => {

  const { videoId } = props;

  return (
    <Iframe
      src={`https://www.youtube.com/embed/${videoId}`}
      height={560}
      width={315}
    />
  )

};

YouTubePlayerView.propTypes = propTypes;

export default YouTubePlayerView;
