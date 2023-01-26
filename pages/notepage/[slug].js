import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from 'next-sanity'


function ProjectPage(props) {
    const router = useRouter()
    const { note } = props
    return (
        <iframe
            allow="fullscreen"
            title={`${note.title}`}
            className='h-screen w-full'
            src={`${note.link}`}
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            width="100%"
            height="100%"
            scrolling="auto"></iframe>
    )
}

export default ProjectPage


export async function getServerSideProps(context) {
    const slug = context.query.slug

    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })


    const query = `*[_id=="${slug}"][0]{
        title,
        "slug": slug.current,
        languages[]->{language},
        link
    }`

    const note = await client.fetch(query)

    return {
        props: {
            note
        }
    }

}