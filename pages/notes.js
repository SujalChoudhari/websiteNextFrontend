import React from 'react'
import { createClient } from 'next-sanity'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Notes(props) {
    const { notes } = props;
    return (
        <section className="text-gray-600 body-font">
            <section className="text-gray-400  body-font">
                <div className="container px-5 py-14 mx-auto">
                    <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                        <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Notes
                        </h1>
                        <p>
                            Refrence notes crafted by me.
                        </p>
                    </div>
                </div>
            </section>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {
                        notes.map((note) => {
                            return <Link href={`/notepage/${note._id}`} className="p-4 md:w-1/3">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    while
                                    key={note._id} >
                                    <div className="h-full border-2 border-gray-800  bg-gray-900 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={`https://source.unsplash.com/720x400/?${note.slug}`} alt="blog" />
                                        <div className="p-6">
                                            <h2 className="tracking-widest text-xs title-font font-medium text-gray-500 mb-1">
                                                Programming Language(s): &nbsp;
                                                {note.tag.map((indi) => {
                                                    return (<span key={indi.title}>{indi.title}</span>)
                                                })}
                                            </h2>
                                            <h1 className="title-font text-lg font-medium text-white mb-3">{note.title}</h1>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={`/notepage/${note._id}`} className="text-blue-400 mx-auto inline-flex items-center md:mb-2 lg:mb-0">Read
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </Link>
                        })}

                </div>
            </div>
        </section>
    )
}

export default Notes

export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })


    const query = `*[_type == "notes"]{
        title,
        _id,
        link,
        "slug": slug.current,
        tag[]->{title},
        "date": publishedAt
    }`
    const notes = await client.fetch(query)

    return {
        props: {
            notes
        }
    }

}   