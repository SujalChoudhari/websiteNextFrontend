import React from 'react'
import { createClient } from 'next-sanity'
import Link from 'next/link'

function Blog(props) {

    const { blogs } = props;
    return (
        <>
            <section className=" text-gray-100">
                <div className="container px-5 py-14 mx-auto">
                    <div className="text-center">
                        <h1 className="text-3xl font-bold leading-tight mb-4">
                            I have collected a lot of information in the journey. I am sharing some of them here.
                        </h1>
                    </div>
                </div>
                <div className="container px-5 py-24 mx-auto">
                    <div className="max-w-3xl mx-auto">
                        {blogs.map((blog) => {
                            return (
                                <div key={blog._id} className="py-8 flex flex-col sm:flex-row items-start">
                                    <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                        <span className="font-semibold text-white">{blog.tags?.at(0).title}</span>
                                        <span className="mt-1 text-gray-500 text-sm">{blog.date}</span>
                                    </div>
                                    <div className="md:flex-grow">
                                        <h2 className="text-2xl font-medium text-white leading-tight mb-2">{blog.title}</h2>
                                        <Link href={`/m/blogpost/${blog._id}`} className="inline-flex items-center text-blue-400 hover:text-blue-500">
                                            Read more
                                            <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M5 12h14"></path>
                                                <path d="M12 5l7 7-7 7"></path>
                                            </svg>
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>


        </>
    )
}

export default Blog


export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })


    const query = `*[_type == "blog"]{
        title,
        _id,
        "slug": slug.current,
        tag[]->{title},
        link
    }`
    const blogs = await client.fetch(query)

    return {
        props: {
            blogs
        }
    }

}   