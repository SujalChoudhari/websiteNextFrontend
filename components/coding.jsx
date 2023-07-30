import React from 'react'
import styles from '../styles/CodingVideo.module.css'

function CodingVideo() {
  return (
    <div>
        <video 
        className={styles['video']}
        src="./coding.mp4"
        autoPlay
        loop
        preload='auto'
        muted
        />
    </div>
  )
}

export default CodingVideo