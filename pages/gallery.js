import React from 'react'
import { useState } from 'react'
import { createClient } from 'next-sanity'
import Link from 'next/link'
import { NextResponse } from 'next/server'
import ImgsViewer from "react-images-viewer";

function Projects(props) {
    const { urls } = props;

    const [currentImage, setCurrentImage] = useState(0);

    function gotoNext(){
        setCurrentImage(currentImage+ 1);
    }

    function gotoPrevious(){
        setCurrentImage(currentImage-1);
    };

    function closeViewer(){
        window.history.back();
    }

    return (
        <>
            {/* <section className="text-gray-400 bg-black body-font">
                <section className="text-gray-400  body-font">
                    <div className="container px-5 py-14 mx-auto">
                        <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
                            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">Projects
                            </h1>
                            <p>
                                Here is a collection of projects that I have worked on.
                            </p>
                        </div>
                    </div>
                </section>
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">

                        {images.map((project) => {

                            return <>
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    className="p-4 md:w-1/3"
                                >
                                    <div className="h-full border-2 border-gray-800  bg-gray-900 rounded-lg overflow-hidden">
                                        <img className="lg:h-48 md:h-36 w-full object-cover object-center" src={project.image.url} alt="project" />
                                        <div className="p-6">
                                            {
                                                project.tag?.map((tags) => {
                                                    return (<span key={tags.title} >{tags.title}</span>)
                                                })
                                            }
                                            <h1 className="title-font text-lg font-medium text-white mb-3">{project.title}</h1>
                                            <div className="flex items-center flex-wrap ">
                                                <Link href={`/projectpage/${project._id}`} className="text-blue-400 mx-auto inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                                    <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                        <path d="M5 12h14"></path>
                                                        <path d="M12 5l7 7-7 7"></path>
                                                    </svg>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            </>
                        })}

                    </div>
                </div>
            </section> */}
            <ImgsViewer
                imgs={urls}
                currImg={currentImage}
                isOpen={1}
                onClickPrev={gotoPrevious}
                onClickNext={gotoNext}
                onClose={closeViewer}
            />
        </>
    )
}

export default Projects


export async function getServerSideProps() {
    const client = createClient({
        projectId: process.env.SANITY_PROJECT_ID,
        dataset: process.env.SANITY_DATASET,
        useCdn: process.env.SANITY_USE_CDN,
    })

    const query = '*[_type == "art"]{title,_id,slug,"image" : mainImage.asset->{url},tag[]->{title}}'
    const images = await client.fetch(query)
    const urls = [];
    images.map(image =>
        urls.push({src: image.image.url,
        caption:image.title})
    )

    return {
        props: {
            urls: urls
        }
    }

}