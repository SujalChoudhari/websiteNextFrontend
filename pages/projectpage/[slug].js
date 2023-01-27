import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from 'next-sanity'

import PortableText from 'react-portable-text'

function ProjectPage(props) {
    const router = useRouter()
    // const { slug } = router.query
    const { project } = props

    return (
        <>
            <section className="text-gray-600 body-font">
                <section className="text-gray-400 bg-black body-font">
                    <div className="container px-5 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-4xl font-large title-font text-white">{project.title}</h1>
                        </div>
                    </div>
                </section>
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={project.image} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">

                            <div className="sm:w-2/3 leading-relaxed text-lg sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-white">
                                    <PortableText

                                        content={project.body}
                                        projectId={process.env.SANITY_PROJECT_ID}
                                        dataset={process.env.SANITY_DATASET}

                                    />

                                {project.tag?.map((tag) => {
                                    return (
                                        <div className='text-sm text-gray-500' key={tag.title} >
                                            <h3>{tag.title}</h3>
                                        </div>
                                    )

                                })}

                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
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
        "image" : mainImage.asset->url,
        "slug": slug.current,
        body,
        tag[]->{title}
    }`

    const project = await client.fetch(query)

    return {
        props: {
            project
        }
    }

}