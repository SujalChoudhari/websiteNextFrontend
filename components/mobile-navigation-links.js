import React from 'react'
import Link from 'next/link'

function NavigationLinks() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center font-medium text-base justify-center">
            <Link href="/m/" className="mr-5 hover:text-white">Home</Link>
            <Link href="/m/about" className="mr-5 hover:text-white">About</Link>
            <Link href="/m/blog" className="mr-5 hover:text-white">Blog</Link>
            <Link href="/m/guestbook" className="mr-5 hover:text-white">Guestbook</Link>
            <Link href="/m/projects" className="mr-5 hover:text-white">Projects</Link>
            <Link href="/m/gallery" className="mr-5 hover:text-white">Gallery</Link>
            <Link href="/m/notes" className="mr-5 hover:text-white">Notes</Link>
        </nav>
    )
}

export default NavigationLinks