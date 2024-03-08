import React from 'react'
import styles from '../styles/Footer.module.css'

function SocialLinks() {
    return (
        <div className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start space-x-4">
            <a href="https://www.facebook.com/sujal.choudhary.921/" className={styles.facebook} target="_blank " rel="noopener">
                <i className="fab fa-facebook fa-2x" />
            </a>
            <a href="https://twitter.com/Sujal212004" className={styles.twitter} target="_blank" rel="noopener">
                <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="https://www.instagram.com/_sujal_choudhari_" className={styles.instagram} target="_blank" rel="noopener">
                <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="https://www.github.com/sujalchoudhari" className={styles.github} target="_blank" rel="noopener">
                <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="https://www.youtube.com/channel/UCOWnU50ubRDLUrshiuPiQgg?view_as=subscriber" className={styles.youtube}
                target="_blank" rel="noopener">
                <i className="fab fa-youtube fa-2x"></i>
            </a>
            <a href="https://t.me/sujalchoudhari" className={styles.telegram} target="_blank" rel="noopener">
                <i className="fab fa-telegram fa-2x"></i>
            </a>
        </div>
    )
}

export default SocialLinks