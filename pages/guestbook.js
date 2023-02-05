import React from 'react'
import SignBook from '../components/SignBook'
import { motion } from 'framer-motion'

function GuestBook(props) {

    const { comments } = props
    return (
        <>
            <SignBook />
            <motion.div
                animate={{
                    y: 10,
                    scale: 1.1,
                }}

                transition={{
                    yoyo: Infinity,
                    duration: 5,
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,224L26.7,240C53.3,256,107,288,160,266.7C213.3,245,267,171,320,138.7C373.3,107,427,117,480,149.3C533.3,181,587,235,640,250.7C693.3,267,747,245,800,208C853.3,171,907,117,960,101.3C1013.3,85,1067,107,1120,128C1173.3,149,1227,171,1280,170.7C1333.3,171,1387,149,1413,138.7L1440,128L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"></path></svg>
            </motion.div>

            <section className="text-gray-400 bg-gray-900 body-font ">
                {

                    comments.map((comment) => {
                        return (
                            <div key={comment._id} className="container px-5 py-8 mx-auto flex flex-wrap items-center ">
                                <div className="w-full md:pr-16 lg:pr-0 pr-0 lg:ml-64 md:ml-8 sm:ml-4 ">
                                    <h1 className="title-font font-medium text-3xl text-white">{comment.name}</h1>
                                    <p className="leading-relaxed w-1/2 mt-4">
                                        {comment.message}
                                    </p>
                                    <hr width="30%" />
                                </div>
                            </div>
                        )
                    })
                }

            </section>
            <motion.div
                animate={{
                    y: -10,
                    scale: 1.1,
                }}

                transition={{
                    yoyo: Infinity,
                    duration: 5,
                }}
            >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,64L26.7,58.7C53.3,53,107,43,160,42.7C213.3,43,267,53,320,85.3C373.3,117,427,171,480,176C533.3,181,587,139,640,117.3C693.3,96,747,96,800,106.7C853.3,117,907,139,960,160C1013.3,181,1067,203,1120,176C1173.3,149,1227,75,1280,48C1333.3,21,1387,43,1413,53.3L1440,64L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
            </motion.div>


            <SignBook />
        </>
    )
}

export default GuestBook


export async function getServerSideProps(ctx) {

    // const data = await fetch('http://localhost:3000/api/getComments')
    // const data = await fetch('http://sujalchoudhari.me/api/getComments')
    const data = await fetch('https://sujalchoudhari.vercel.app/api/getComments')
    console.log(data)
    var { comments } = await data.json()
    comments = comments.reverse()
    return {
        props: {
            comments
        }
    }
}
