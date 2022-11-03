import React from 'react'
import Link from 'next/link'

function Navbar() {
    return (
        <>
            <header className="text-gray-400 bg-black body-font ">
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link href="/" className="flex title-font font-medium items-center text-white mb-4 md:mb-0">
                        <img src="/logo.png" className="w-20 h-20 text-white p-2 rounded-full" />
                        <span className="ml-3 text-xl">Sujal Choudhari</span>
                    </Link>
                    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                        <Link href="/" className="mr-5 hover:text-white">Home</Link>
                        <Link href="/about" className="mr-5 hover:text-white">About</Link>
                        <Link href="/blog" className="mr-5 hover:text-white">Blog</Link>
                        <Link href="/projects" className="mr-5 hover:text-white">Projects</Link>
                    </nav>
                    <Link href="/contact">
                    <button className="inline-flex text-white items-center bg-blue-700 border-0 py-1 px-3 focus:outline-none hover:bg-blue-500 rounded text-base mt-4 md:mt-0">Contact
                        <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                    </Link>
                </div>
            </header>

        </>
    )
}

export default Navbar