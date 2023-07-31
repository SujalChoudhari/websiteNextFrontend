import Banner from "../components/banner";
import CircularLinks from "../components/circularlinks";
import VideoBackgroundPlayer from "../components/video-player";

export default function Home() {
  return (
    <>
      <Banner>
        <a href="./m">Go to the mobile version of this website.</a>
      </Banner>
      <VideoBackgroundPlayer src="./coding.mp4" />

      <span>
        <CircularLinks
          links={[
            { name: "Home", url: "./" },
            { name: "About", url: "./m/about" },
            { name: "Blog", url: "./m/blog" },
            { name: "Guestbook", url: "./m/guestbook" },
            { name: "Projects", url: "./m/projects" },
            { name: "Gallery", url: "./m/gallery" },
            { name: "Notes", url: "./m/notes" },
            { name: "Contact", url: "./m/contact" },
          ]}
        />
      </span>
    </>
  )
}
