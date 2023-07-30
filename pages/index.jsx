import Banner from "../components/banner";
import CircularLinks from "../components/circularlinks";
import CodingVideo from "../components/coding";
import { useEffect } from 'react';
import { useRouter } from 'next/router';


export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      // Adjust this width threshold based on your definition of mobile
      const isMobile = screenWidth <= 768; // For example, considering screens 768px and below as mobile

      if (isMobile) {
        router.push('./m/'); // Redirect to the mobile version of the site
      }
    };

    // Check screen width on initial mount and when resizing
    handleResize();
    window.addEventListener('resize', handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [router]);


  return (
    <>
      <Banner>
        <a href="./m">Go to the mobile version of this website.</a>
      </Banner>
      <CodingVideo />

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
