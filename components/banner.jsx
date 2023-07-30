import React, { useState } from 'react';
import styles from '../styles/Banner.module.css';

const Banner = ({ children }) => {
  const [showBanner, setShowBanner] = useState(true);

  const handleClose = () => {
    setShowBanner(false);
  };

  return (
    <>
      {showBanner && (
        <div className={styles.banner}>
          <div className={styles.bannerText}>
            {children}
          </div>
          <button
            onClick={handleClose}
            className={styles.closeButton}
          >
            X
          </button>
        </div>
      )}
    </>
  );
};

export default Banner;
