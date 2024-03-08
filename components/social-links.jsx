import React from 'react'
import SocialLinks from "./mobile-social-links";
import styles from "../styles/SocialLinksHover.module.css"
function SocialLinksHover() {
    return (
        <div className={styles.holder}>
            <SocialLinks />
        </div>
    )
}

export default SocialLinksHover