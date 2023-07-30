import React from 'react'
import Image from 'next/image'
import { aboutMe } from '../../components/data'

function About() {
    return (
        <>
            <section className="text-gray-400  body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        {/* <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div> */}
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900 text-gray-600">
                                    <Image src="/logo.png" width={64} height={64} />
                                </div>
                                <div className="flex flex-col items-center text-center justify-center">
                                    <h2 className="font-medium title-font mt-4 text-white text-lg">Sujal Choudhari</h2>
                                    <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                    <p className="text-base text-gray-400">
                                        Hello, I am Sujal Choudhari. I am currently a hobby developer and a student.
                                        I live in Maharashtra, India.
                                    </p>
                                </div>
                            </div>
                            <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-800 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                <p className="leading-relaxed text-lg mb-4">
                                    {aboutMe}

                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About