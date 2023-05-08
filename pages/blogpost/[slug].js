import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { createClient } from 'next-sanity'


function BlogPage(props) {
    const { blog } = props
    return (
        <div className='flex flex-col justify-center  items-center mx-auto'>
            <h1 className="text-3xl font-bold leading-tight mb-4 text-center">
                {blog.title}
            </h1>
        <iframe
            allow="fullscreen"
            title={`${blog.title}`}
            className='flex justify-center items-center mx-auto'
            src={`${blog.link}`}
            height="848"
            width="504"
            >

        </iframe>

        
        {
            blog.category.map((tag) => {
                return (
                    <div key={tag._id} className="py-8 flex flex-col sm:flex-row items-start">
                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                            <span className="font-semibold text-white">{tag.title}</span>
                            {/* <span className="mt-1 text-gray-500 text-sm">{blog.date}</span> */}
                        </div>
                    </div>
                )
            }
            )
        }

        </div>

        // <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7053239809485520896" height="848" width="504" frameborder="0" allowfullscreen="" title="Embedded post"></iframe>
    )
}

export default BlogPage


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
        category[]->{title},
        link
    }`

    const blog = await client.fetch(query)
    console.log(blog)

    return {
        props: {
            blog
        }
    }

}