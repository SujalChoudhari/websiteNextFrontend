import React from 'react'
import { useEffect } from 'react';
import { useRouter } from 'next/router';

function MobileRedirection() {
    const router = useRouter();

    useEffect(() => {
      const handleResize = () => {
        const screenWidth = window.innerWidth;
        if (screenWidth <= 768) {
          router.push('./m' + router.pathname);
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
        <></>
    )
}

export default MobileRedirection