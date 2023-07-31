import React from 'react';

import PropTypes from 'prop-types';
import styles from '../styles/VideoPlayer.module.css';

function VideoBackgroundPlayer({ src }) {
  return (
    <div>
      <video
        className={styles['video']}
        src={src}
        autoPlay
        loop
        preload='auto'
        muted
      />
    </div>
  );
}

VideoBackgroundPlayer.propTypes = {
  src: PropTypes.string.isRequired,
};

export default VideoBackgroundPlayer;
