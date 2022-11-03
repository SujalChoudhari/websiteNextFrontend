import React from 'react'

function Contact() {
    return (
        <>
            <section class="text-gray-400 bg-black body-font">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-col text-center w-full mb-20">
                        <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact me</h1>
                        <p class="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Reach out to me at these social media platforms. I am always open to new opportunities and collaborations.
                        </p>
                    </div>
                    <div class="flex flex-wrap -m-2">
{/* Item */}
                        <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
                            <div class="h-full flex items-center border-gray-800 border p-4 rounded-lg">
                                <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dummyimage.com/104x94" />
                                    <div class="flex-grow">
                                        <h2 class="text-white title-font font-medium">Mail</h2>
                                        <p class="text-gray-600">sjlchoudhari@gmail.com</p>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact