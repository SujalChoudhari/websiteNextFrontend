import React from 'react'
import { createClient } from 'next-sanity'
import Link from 'next/link'
import PortableText from 'react-portable-text'

function Blog(props) {

    const { blogs } = props;
    console.log(blogs)
    return (
        <>
            <section className="text-gray-400 bg-black body-font overflow-hidden">
                <section className="text-gray-400 bg-black body-font">
                    <div className="container px-5 py-14 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">I have collected a lot of information in the journey. I am sharing some of them here.</h1>
                        </div>
                    </div>
                </section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="-my-8 divide-y-2 divide-gray-800">

                        {
                            blogs.map((blog) => {
                                return (
                                    <div key={blog._id} className="py-8 flex flex-wrap md:flex-nowrap">
                                        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                            <span className="font-semibold title-font text-white">{blog.categories[0].title}</span>
                                            <span className="mt-1 text-gray-500 text-sm">{blog.date}</span>
                                        </div>
                                        <div className="md:flex-grow">
                                            <h2 className="text-2xl font-medium text-white title-font">{blog.title}</h2>
                                            <Link href={`blogpost/${blog._id}`} className="text-blue-400 inline-flex items-center mt-1">Read
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </Link>
                                        </div>
                                    </div>)
                            })
                        }


                    </div>
                </div>
            </section>
        </>
    )
}

export default Blog


export async function getServerSideProps() {
    const client = createClient({
        projectId: "x4y28wp2",
        dataset: "production",
        useCdn: false,
    })

    const query = `*[_type == "post"]{
        title,
        _id,
        body,
        "slug": slug.current,
        categories[]->{title},
        "date": publishedAt,
        "image" : mainImage.asset->url
    }`
    const blogs = await client.fetch(query)

    return {
        props: {
            blogs
        }
    }

}   