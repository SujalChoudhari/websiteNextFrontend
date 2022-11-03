import React from 'react'
import Link from 'next/link'

function Footer() {
    return (
        <>
            <footer className="text-gray-400 bg-black body-font">
                <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
                <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="/logo.png" className="w-20 h-20 text-white p-2 rounded-full" />
                        <span className="ml-3 text-xl">Sujal Choudhari</span>
                    </Link>
                    <p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">A Computer Enthusiast
                    </p>
                </div>
            </footer>
        </>
    )
}

export default Footer