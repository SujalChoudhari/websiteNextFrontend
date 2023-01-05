import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CountUp from 'react-countup';
import Skillbar from 'react-skillbars';
import { motion } from 'framer-motion'



export default function Home() {

  // blue theme
  const frontEndSkills = [
    { type: "HTML", level: 80 },
    { type: "CSS", level: 60 },
    { type: "JavaScript", level: 95 },
    { type: "React", level: 70 },
    { type: "Next.js", level: 55 },
  ]

  // green theme
  const backEndSkills = [
    { type: "Django", level: 60 },
    { type: "Python", level: 95 },
    { type: "Flask", level: 50 },
    { type: "MongoDB", level: 65 },
    { type: "Node", level: 80 },
  ]

  // red theme
  const gameDevSkills = [
    { type: "Unity", level: 90 },
    { type: "C#", level: 90 },
    { type: "Godot", level: 80 },
    { type: "GDScript", level: 70 },
    { type: "Blender", level: 45 },
    { type: "Pygame", level: 95 },
  ]







  return (<>
    {/* Hero */}
    <section className="text-gray-400 bg-black body-font">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:mx-4 lg:mx-8 md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl  mb-4 font-medium text-white">Hey there,
            <br className="hidden lg:inline-block" /> I'm <span className="text-blue-500">
              <p>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>S</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>u</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>j</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>a</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>l</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}> </motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>C</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>h</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>o</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>u</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>d</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>h</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>a</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>r</motion.button>
                <motion.button whileHover={{ scale: 1.5, rotate: 10, y: -10, color: "rgb(255,255,255)" }}>i</motion.button>
              </p>
            </span>
          </h1>
          <p className="mb-8 leading-relaxed ">
            I am a Information Technologt Student and a Hobby Game Developer.
            Here you can find my projects, blogs, and more.
          </p>
          <p className='mb-8 text-gray-600'>
            You can get to know me better by visiting the About page
            I am always up for collabs and contributions, contact me for the same!

          </p>
          <div className="flex justify-center">
            <Link href="/projects">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}


                className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">Projects</motion.button>
            </Link>
            <Link href="/contact">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact</button>
            </Link>
          </div>
        </div>

        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <div className="absolute lg:max-w-lg lg:w-full md:w-1/2 w-5/6 z-10 ">
            <svg
              viewBox="0 0 200 200"
              xmlns="http://www.w3.org/2000/svg"
              className=' z-0 object-center' >
              <motion.path
                initial={{ filter: "blur(10px)" }}

                animate={{
                  d: [
                    "M33.7,-68.2C38.1,-55.8,32.3,-35.6,40,-22.9C47.8,-10.2,69.2,-5.1,74.5,3.1C79.8,11.2,69,22.4,61.2,35C53.4,47.6,48.5,61.7,38.8,69.7C29.1,77.8,14.6,80,-0.6,81C-15.8,82,-31.5,82,-42.8,74.8C-54,67.6,-60.8,53.3,-63.9,39.6C-67.1,26,-66.7,13,-67.6,-0.5C-68.4,-14,-70.5,-27.9,-66.1,-39.4C-61.7,-50.9,-50.7,-59.9,-38.6,-67.8C-26.5,-75.7,-13.3,-82.4,0.7,-83.6C14.6,-84.8,29.3,-80.5,33.7,-68.2Z",
                    "M37.4,-72.4C44.5,-60.6,43.5,-42.6,45.1,-29.5C46.6,-16.4,50.6,-8.2,55.6,2.9C60.5,13.9,66.5,27.9,63.7,38.9C61,50,49.7,58.2,37.6,60.3C25.6,62.3,12.8,58.2,-0.2,58.4C-13.1,58.7,-26.3,63.5,-38.9,61.8C-51.5,60.1,-63.7,51.9,-63.5,40.5C-63.3,29.2,-50.8,14.6,-49,1C-47.2,-12.5,-56.1,-25,-55.3,-34.7C-54.5,-44.5,-44.1,-51.4,-33.3,-61.1C-22.5,-70.8,-11.2,-83.1,1.9,-86.5C15.1,-89.9,30.3,-84.2,37.4,-72.4Z",
                    "M35.2,-61C42.7,-56.7,43.9,-41.4,40.2,-29.4C36.4,-17.3,27.8,-8.7,30.5,1.6C33.3,11.8,47.4,23.7,47.6,29.5C47.8,35.4,34,35.2,23.8,40.4C13.5,45.6,6.8,56.1,-3.1,61.5C-13,66.9,-26,67.2,-33,60.1C-40,53.1,-41.1,38.7,-47.4,27.5C-53.8,16.3,-65.3,8.1,-61.8,2C-58.3,-4.1,-39.9,-8.2,-27.3,-8.6C-14.7,-9.1,-8.1,-5.8,-4.5,-12.4C-1,-19,-0.5,-35.5,6.7,-47.1C13.9,-58.7,27.7,-65.4,35.2,-61Z",
                    "M30.2,-67.7C31,-51.8,18,-27.3,25.6,-14.6C33.3,-1.9,61.7,-1,74,7.1C86.3,15.1,82.5,30.3,73.2,40.3C64,50.2,49.2,55,36.1,57.4C23,59.8,11.5,59.8,-0.7,61.1C-12.9,62.3,-25.8,64.7,-30.8,57.6C-35.8,50.5,-32.9,33.9,-28.1,22.7C-23.3,11.6,-16.7,5.8,-21.4,-2.8C-26.2,-11.3,-42.4,-22.6,-47.2,-33.7C-51.9,-44.8,-45.2,-55.6,-35.4,-66.4C-25.6,-77.2,-12.8,-87.8,0.9,-89.4C14.7,-91,29.4,-83.7,30.2,-67.7Z"
                  ]
                }}

                transition={{
                  duration: 30,
                  ease: "linear",
                  repeat: Infinity,
                  repeatType: "reverse"
                }}

                fill="#0F62FE"
                d="M33.7,-68.2C38.1,-55.8,32.3,-35.6,40,-22.9C47.8,-10.2,69.2,-5.1,74.5,3.1C79.8,11.2,69,22.4,61.2,35C53.4,47.6,48.5,61.7,38.8,69.7C29.1,77.8,14.6,80,-0.6,81C-15.8,82,-31.5,82,-42.8,74.8C-54,67.6,-60.8,53.3,-63.9,39.6C-67.1,26,-66.7,13,-67.6,-0.5C-68.4,-14,-70.5,-27.9,-66.1,-39.4C-61.7,-50.9,-50.7,-59.9,-38.6,-67.8C-26.5,-75.7,-13.3,-82.4,0.7,-83.6C14.6,-84.8,29.3,-80.5,33.7,-68.2Z"
                transform="translate(100 100)" />
            </svg>
          </div>
          <motion.div
            drag={true}
            dragConstraints={{
              left: 40,
              right: 40,
              top: 40,
              bottom: 40,
            }}

            dragElastic={0.7}

            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="relative z-10"
          >

            <Image zIndex={5} className="object-cover object-center rounded mx-auto cursor-pointer" alt="hero" src="/sujal.png" width={300} height={1000} quality={100} loading="eager" />

          </motion.div>

        </div>
      </div>
    </section>


    {/* Stats */}
    <section className="text-gray-400 bg-gray-900 body-font">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#000000" fillOpacity="1" d="M0,192L26.7,181.3C53.3,171,107,149,160,133.3C213.3,117,267,107,320,122.7C373.3,139,427,181,480,213.3C533.3,245,587,267,640,234.7C693.3,203,747,117,800,90.7C853.3,64,907,96,960,122.7C1013.3,149,1067,171,1120,170.7C1173.3,171,1227,149,1280,154.7C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
        </svg>
      </motion.div>
      <section className="text-gray-400 bg-gray-900 body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
              <span className='text-blue-700'>Personal Stats</span> <br />
              Some Stats related to my experience and skills
            </h1>
          </div>
        </div>
      </section>
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4 text-center">
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white"><CountUp delay={5} end={200} duration={5} />+</h2>
            <p className="leading-relaxed">Commits</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white"><CountUp delay={5} end={20} duration={5} />+</h2>
            <p className="leading-relaxed">Game Prototypes</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white"><CountUp delay={5} end={25} duration={5} />+</h2>
            <p className="leading-relaxed">Open Source Projects</p>
          </div>
          <div className="p-4 sm:w-1/4 w-1/2">
            <h2 className="title-font font-medium sm:text-4xl text-3xl text-white"><CountUp delay={5} end={4} duration={5} /></h2>
            <p className="leading-relaxed">Game jam Wins</p>
          </div>
        </div>
      </div>
    </section>


    {/* Skills */}

    <section className="text-gray-400 bg-black body-font ">
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,176C213.3,160,267,128,320,122.7C373.3,117,427,139,480,122.7C533.3,107,587,53,640,53.3C693.3,53,747,107,800,117.3C853.3,128,907,96,960,74.7C1013.3,53,1067,43,1120,74.7C1173.3,107,1227,181,1280,192C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
      </motion.div>
      <section className="text-gray-400 bg-black body-font">
        <div className="container px-5 py-14 mx-auto">
          <div className="lg:w-2/3 flex flex-col sm:flex-row sm:items-center items-start mx-auto">
            <h1 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white">
              <span className='text-blue-700'>Technical Skills</span> <br />
              A representation of my proficiency in various technologies
            </h1>
          </div>
        </div>
      </section>
      <section className='lg:mx-32 md:mx-12 mx-4 py-3'>
        <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"> Frontend Skills</h2>
        <Skillbar skills={frontEndSkills} colors={{
          bar: "#4661fa",
          title: {
            text: "#fff",
            background: "#314ff7"
          }
        }} height={40} />
      </section>

      <section className='lg:mx-32 md:mx-12 mx-4 py-3'>
        <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"> Backend Skills</h2>
        <Skillbar skills={backEndSkills} colors={{
          bar: "#fac146",
          title: {
            text: "black",
            background: "#fab319"
          }
        }} height={40} />
      </section>

      <section className='lg:mx-32 md:mx-12 mx-4 py-3'>
        <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"> GameDev Skills</h2>
        <Skillbar skills={gameDevSkills} colors={{
          bar: "#4cf55f",
          title: {
            text: "black",
            background: "#19fa33"
          }
        }} height={40} />
      </section>

    </section>
  </>
  )
}
