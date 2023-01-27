import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from 'next-sanity'

import PortableText from 'react-portable-text'

function BlogPost(props) {
    const router = useRouter()
    // const { slug } = router.query
    const { blog } = props

    return (
        <>
            <section className="text-gray-600 body-font">
                <section className="text-gray-400 bg-black body-font">
                    <div className="container px-5 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">{blog.title}</h1>
                        </div>
                    </div>
                </section>
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src={blog.image} />
                        </div>
                        <div className="flex flex-col sm:flex-row mt-10">

                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left text-white">
                                <PortableText

                                    content={blog.body}
                                    projectId={process.env.SANITY_PROJECT_ID}
                                    dataset={process.env.SANITY_DATASET}

                                />

                                <p className='text-gray-600'>
                                    {blog.time}
                                </p>
                                <p className='text-gray-600'>
                                    {blog.tags.map((tags) => {
                                        return (
                                            <span key={tags.title} >
                                                <span>{tags.title}</span> <br/> <br/>
                                                <span>{tags.description}</span>
                                            </span>
                                        )

                                    })}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default BlogPost


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
        "tags": tags[]->{title,description},
        "time": publishedAt,
    }`

    const blog = await client.fetch(query)

    return {
        props: {
            blog
        }
    }

}