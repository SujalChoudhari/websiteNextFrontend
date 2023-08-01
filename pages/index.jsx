import Banner from "../components/banner";
import CircularLinks from "../components/circularlinks";
import VideoBackgroundPlayer from "../components/video-player";
import {navigationLinks} from "../components/data";
import Link from "next/link";
import React from 'react'



export default function Home() {
  return (
    <>
      <Banner>
        <Link href="./m">Go to the mobile version of this website.</Link>
      </Banner>
      <VideoBackgroundPlayer src="./coding.mp4"/>

      <span>
        <CircularLinks
          links={navigationLinks}
        />
      </span>
    </>
  )
}



