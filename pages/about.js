import React from 'react'

function About() {
    return (
        <>
            <section className="text-gray-400 bg-black body-font">
                <div className="container px-5 py-24 mx-auto flex flex-col">
                    <div className="lg:w-4/6 mx-auto">
                        {/* <div className="rounded-lg h-64 overflow-hidden">
                            <img alt="content" className="object-cover object-center h-full w-full" src="https://dummyimage.com/1200x500" />
                        </div> */}
                        <div className="flex flex-col sm:flex-row mt-10">
                            <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-900 text-gray-600">
                                    <img src="logo.png" className='h-10' />
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
                                    Here is a small description of my journey as a developer. <br /> <br />
                                    I started learning Python in 2018. I was in 9th grade at that time.
                                    I didn't knew, what I was steping into. I was just curious about programming.
                                    I started learning Python and I was amazed by the power of programming.
                                    As time went by, I started learning more and more about programming.
                                    Soon I got into Game Development so started learning C# and Unity.
                                    Made quite a few games, some for Jams, some just for fun.

                                    <br/> <br/>
                                    In 2020, during the lockdown, I had time to explore programming. 
                                    So I did, I did various projects in various diffrent languages.
                                    I learned technologies like HTML, CSS, JavaScript, React, Next.js, Node.js, 
                                    Express.js, MongoDB, Firebase, Python, C#, Unity, Blender, and many many more.

                                    Currently I am getting into Web Development. 
                                    Web Development was my last option to learn. 
                                    I always thought that Web Development is boring. 
                                    But I was wrong. And I am here making this website.

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