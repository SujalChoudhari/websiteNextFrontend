import React,{useState} from 'react'

function Contact() {
    const [body, setBody] = useState('')
    function messageChanged(event){
        setBody(event.target.value)
    }

    function sendMailPressed(){
        const mailto = `mailto:
        ?subject= Contact from your Website
        &body=${body}`
        window.location.href = mailto;
    }
    
    return (
        <>
            <section className="text-gray-400 bg-black body-font relative">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-col text-center w-full mb-12">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Me</h1>
                        <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            I'm always open to new opportunities and challenges. If you have any questions or just want to say hi, feel free to contact me.
                        </p>
                    </div>
                    <div className="lg:w-1/2 md:w-2/3 mx-auto">
                        <div className="flex flex-wrap -m-2">
                            <div className="p-2 w-full">
                                <div className="relative">
                                    <label for="message" className="leading-7 text-sm text-gray-400">Message</label>
                                    <textarea id="message" name="message" className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-blue-500 focus:bg-gray-900 focus:ring-2 focus:ring-blue-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" value={body} onChange={messageChanged} ></textarea>
                                </div>
                            </div>
                            <div className="p-2 w-full">
                                <button className="flex mx-auto text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg" onClick={sendMailPressed}>Send Mail</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact