import React from 'react'
import Link from 'next/link'

function NavigationLinks() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center font-medium text-base justify-center">
            <Link href="/" className="mr-5 hover:text-white">Home</Link>
            <Link href="/about" className="mr-5 hover:text-white">About</Link>
            <Link href="/blog" className="mr-5 hover:text-white">Blog</Link>
            <Link href="/guestbook" className="mr-5 hover:text-white">Guestbook</Link>
            <Link href="/projects" className="mr-5 hover:text-white">Projects</Link>
            <Link href="/gallery" className="mr-5 hover:text-white">Gallery</Link>
            <Link href="/notes" className="mr-5 hover:text-white">Notes</Link>
        </nav>
    )
}

export default NavigationLinks