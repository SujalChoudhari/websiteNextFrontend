import Banner from "../components/banner";
import CircularLinks from "../components/circularlinks";
import VideoBackgroundPlayer from "../components/video-player";
import { navigationLinks } from "../components/data";
import Link from "next/link";
import React from 'react'
import { aboutMe } from "../components/data";



export default function Home() {
  let paras = aboutMe.split('\n');
  return (
    <>
      <Banner>
        <Link href="./m">Go to the mobile version of this website.</Link>
      </Banner>
      <VideoBackgroundPlayer src="./coding.mp4" />

      <h1 className="seo-only">Portfolio of Sujal Choudhari</h1>
      <h2 className="seo-only"> Sujal as a Software developer</h2>

      <article className="seo-only">
        {
          paras.map((para, index) => {
            return <p key={index}>{para}</p>
          })
        }
      </article>

      <main>
        <CircularLinks
          links={navigationLinks}
        />
      </main>

      <section className="seo-only">
        <a href="https://www.facebook.com/sujal.choudhary.921/" target="_blank " rel="noopener">
        </a>
        <a href="https://twitter.com/Sujal212004" target="_blank" rel="noopener">
        </a>
        <a href="https://www.instagram.com/_sujal_choudhari_" target="_blank" rel="noopener">
        </a>
        <a href="https://www.github.com/sujalchoudhari" target="_blank" rel="noopener">
        </a>
        <a href="https://www.youtube.com/channel/UCOWnU50ubRDLUrshiuPiQgg?view_as=subscriber"
          target="_blank" rel="noopener">
        </a>
        <a href="https://t.me/sujalchoudhari" target="_blank" rel="noopener">
        </a>
      </section>
    </>
  )
}



