import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Script from 'next/script'
import NavigationLinks from './mobile-navigation-links'
function MobileNavbar() {
    return (
        <>
            <header className="text-gray-400 bg-gray-900 body-font">
                <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center" >
                    <Link href="/m/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <motion.img
                            duration={1}
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9, rotate: 180, }}
                            alt="Logo" src="/logo.png" className="w-20 h-20 text-white p-2 rounded-full" />
                        <span className="ml-3 text-xl">Sujal Choudhari</span>
                    </Link>
                    <NavigationLinks />
                    <Link href="/m/contact">
                        <button className="inline-flex text-white items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">Contact
                            <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                                <path d="M5 12h14M12 5l7 7-7 7"></path>
                            </svg>
                        </button>
                    </Link>
                </nav>
            </header>
            <motion.div
                animate={{
                    y: -10,
                    scale: 1.1,
                }}

                transition={{
                    yoyo: Infinity,
                    duration: 5,
                }}

            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,64L26.7,58.7C53.3,53,107,43,160,42.7C213.3,43,267,53,320,85.3C373.3,117,427,171,480,176C533.3,181,587,139,640,117.3C693.3,96,747,96,800,106.7C853.3,117,907,139,960,160C1013.3,181,1067,203,1120,176C1173.3,149,1227,75,1280,48C1333.3,21,1387,43,1413,53.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            </motion.div>
        </>
    )
}

export default MobileNavbar