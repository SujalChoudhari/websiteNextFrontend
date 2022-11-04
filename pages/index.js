import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import CountUp from 'react-countup';
import Skillbar from 'react-skillbars';



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
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hey there,
            <br className="hidden lg:inline-block" /> I'm <span className="text-blue-500"> Sujal Choudhari </span>
          </h1>
          <p className="mb-8 leading-relaxed">
            Welcome to my Personal Website. I am a Student and a Hobby Developer.
            Here you can find my projects, blogs, and more. You can get to know me better by visiting the About page.
            Feel free to contact me.

          </p>
          <div className="flex justify-center">
            <Link href="/projects">
              <button className="inline-flex text-white bg-blue-600 border-0 py-2 px-6 focus:outline-none hover:bg-blue-500 rounded text-lg">Projects</button>
            </Link>
            <Link href="/contact">
              <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">Contact</button>
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image className="object-cover object-center rounded mx-auto" alt="hero" src="/sujal.png" width={300} height={1000} quality={100} loading="eager" />
        </div>
      </div>
    </section>


    {/* Stats */}
    <section className="text-gray-400 bg-gray-900 body-font">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path fill="#000000" fillOpacity="1" d="M0,192L26.7,181.3C53.3,171,107,149,160,133.3C213.3,117,267,107,320,122.7C373.3,139,427,181,480,213.3C533.3,245,587,267,640,234.7C693.3,203,747,117,800,90.7C853.3,64,907,96,960,122.7C1013.3,149,1067,171,1120,170.7C1173.3,171,1227,149,1280,154.7C1333.3,160,1387,192,1413,208L1440,224L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path>
      </svg>
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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#111827" fillOpacity="1" d="M0,192L26.7,192C53.3,192,107,192,160,176C213.3,160,267,128,320,122.7C373.3,117,427,139,480,122.7C533.3,107,587,53,640,53.3C693.3,53,747,107,800,117.3C853.3,128,907,96,960,74.7C1013.3,53,1067,43,1120,74.7C1173.3,107,1227,181,1280,192C1333.3,203,1387,149,1413,122.7L1440,96L1440,0L1413.3,0C1386.7,0,1333,0,1280,0C1226.7,0,1173,0,1120,0C1066.7,0,1013,0,960,0C906.7,0,853,0,800,0C746.7,0,693,0,640,0C586.7,0,533,0,480,0C426.7,0,373,0,320,0C266.7,0,213,0,160,0C106.7,0,53,0,27,0L0,0Z"></path></svg>
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
      <section className='mx-32 py-3'>
        <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"> Frontend Skills</h2>
        <Skillbar skills={frontEndSkills} colors={{
          bar: "#4661fa",
          title: {
            text: "#fff",
            background: "#314ff7"
          }
        }} height={40} />
      </section>

      <section className='mx-32 py-3'>
        <h2 className="flex-grow sm:pr-16 text-2xl font-medium title-font text-white"> Backend Skills</h2>
        <Skillbar skills={backEndSkills} colors={{
          bar: "#fac146",
          title: {
            text: "black",
            background: "#fab319"
          }
        }} height={40} />
      </section>

      <section className='mx-32 py-3'>
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
