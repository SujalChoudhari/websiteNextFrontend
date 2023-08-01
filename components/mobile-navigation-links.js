import React from 'react'
import Link from 'next/link'
import { mobileNavigationLinks } from './data';

function NavigationLinks() {
    return (
        <nav className="md:ml-auto flex flex-wrap items-center font-medium text-base justify-center">
            {/* <Link href="/m/" className="mr-5 hover:text-white">Home</Link> */}
            {mobileNavigationLinks.map((link) => {
                return (
                    <Link href={link.link} className="mr-5 hover:text-white" key={link.name}>{link.name}</Link>
                )
            })}
        </nav>
    )
}

export default NavigationLinks