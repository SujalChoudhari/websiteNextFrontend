import React from 'react'
import { navigationLinks } from './data'
import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

function Navbar() {
    return (
        <div className={styles.container}>
            <nav className={styles['navbar']}>
                {
                    navigationLinks.map((link, index) => {
                        return (
                            <Link className={styles['link']} key={index} href={link.link}>
                                {link.name}
                            </Link>
                        )
                    })
                }
            </nav>
        </div>
    )
}

export default Navbar