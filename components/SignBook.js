import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { NextResponse } from 'next/server'

function SignBook() {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [submit, setSubmit] = useState("Submit")
    const [submitted, setSubmitted] = useState(false)


    function nameChanged(event) {
        setName(event.target.value)
    }

    function messageChanged(event) {
        setMessage(event.target.value)
    }

    function submitPressed(ctx) {
         fetch('/api/addComment', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, message }),
        })
            .then((response) => response)
            .then((data) => {
                if(data.status === 200){
                    setName('')
                    setMessage('')
                    setSubmit("Thank you!")
                    setSubmitted(true)
                    return NextResponse.redirect(ctx.req.url)
                }
            })

    }

    return (
        <>
            <section className="text-gray-400 bg-black body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Sign the Guestbook</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Want to leave a message? Sign the guestbook below. Or read the messages that others have left.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
                                    <input onChange={nameChanged} type="text" id="name" name="name" value={name} className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label htmlFor="message" className="leading-7 text-sm text-gray-400">Message</label>
                                    <textarea id="message" onChange={messageChanged} value={message} name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    onClick={submitPressed}
                                    animate={{ d: submitted ? 0 : 1 }}

                                className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">{submit}</motion.button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default SignBook