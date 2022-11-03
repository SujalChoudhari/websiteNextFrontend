import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (<>
    <section className="text-gray-400 bg-black body-font">
      <div className="container mx-auto flex px-5  md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">Hey there,
            <br className="hidden lg:inline-block" /> I'm <span className="text-blue-500"> Sujal Choudhari </span>
          </h1>
          <p className="mb-8 leading-relaxed">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus obcaecati, quia fugiat quas quibusdam fugit voluptates, explicabo delectus perspiciatis dolorum sequi nemo inventore id tempora ullam natus et culpa possimus.  </p>
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
          <img className="object-cover object-center rounded mx-auto" alt="hero" src="/sujal.png" width="300" />
        </div>
      </div>
    </section>

  </>
  )
}
