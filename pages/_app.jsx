import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import MobileNavbar from '../components/mobile-navbar';
import Navbar from '../components/navbar';
import MobileRedirection from '../components/mobile-redirection';
import Footer from '../components/mobile-footer';
import Playground from '../components/playground';
import '../styles/globals.css';

const MyApp = ({ Component, pageProps, router }) => {
  const isMobilePath = router.pathname.includes('m');

  return (
    <>
      <Head>
        <title>Sujal Choudhari - Web, App, and Game Developer</title>
        <meta
          name="description"
          content="I am Sujal Vivek Choudhari, a passionate web developer, app developer, and game developer. Explore my portfolio and projects."
        />
        <meta
          name="keywords"
          content="Sujal Vivek Choudhari, Sujal Choudhari, Sujal, Web Developer, App Developer, Game Developer, Portfolio"
        />
        <meta httpEquiv="Content-Language" content="en" />
        <meta charSet="UTF-8" />

        <meta name="author" content="Sujal Vivek Choudhari" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#000000" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta name="msapplication-TileImage" content="./favicon.png" />
        <meta name="sitemap" content="https://sujal.xyz/sitemap.xml" />

        {/* Open Graph */}
        <meta property="og:title" content="Sujal Choudhari - Web, App, and Game Developer" />
        <meta property="og:description" content="I am Sujal Vivek Choudhari, a passionate web developer, app developer, and game developer. Explore my portfolio and projects." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sujal.xyz/" />
        <meta property="og:image" content="https://sujal.xyz/pfp.png" />
        <meta property="og:image:alt" content="Sujal Choudhari - Web, App, and Game Developer" />

        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Sujal Choudhari - Web, App, and Game Developer" />
        <meta name="twitter:description" content="I am Sujal Vivek Choudhari, a passionate web developer, app developer, and game developer. Explore my portfolio and projects." />
        <meta name="twitter:image" content="https://sujal.xyz/pfp.png" />

        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Parisienne&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
      </Head>

      <NextNProgress />
      {isMobilePath && (
        <>
          <MobileNavbar />
        </>
      )}

      <Component {...pageProps} />
      {!isMobilePath && router.pathname !== '/' && <Navbar />}
      {!isMobilePath && <MobileRedirection />}
      {!isMobilePath && <Playground />}
      <Analytics />

      {isMobilePath && <Footer />}
    </>
  );
};

export default MyApp;
