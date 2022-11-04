import React from 'react'
import Link from 'next/link'
import styles from '../styles/Footer.module.css'

function Footer() {
    return (
        <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,224L26.7,240C53.3,256,107,288,160,266.7C213.3,245,267,171,320,138.7C373.3,107,427,117,480,149.3C533.3,181,587,235,640,250.7C693.3,267,747,245,800,208C853.3,171,907,117,960,101.3C1013.3,85,1067,107,1120,128C1173.3,149,1227,171,1280,170.7C1333.3,171,1387,149,1413,138.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            <footer className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img alt="Logo" src="/logo.png" className="w-20 h-20 text-white p-2 rounded-full" />
                        <span className="ml-3 text-xl">Sujal Choudhari</span>
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">A Computer Enthusiast
                    </p>
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
                </div>
            </footer>
        </>
    )
}

export default Footer