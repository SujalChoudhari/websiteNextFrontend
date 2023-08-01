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
        <title>Sujal Choudhari</title>
        <meta name="description" content="Sujal Choudhari's Personal Website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <NextNProgress />
      {isMobilePath && (
        <>
          <MobileNavbar />
        </>
      )}

      <Component {...pageProps} />
      {!isMobilePath &&router.pathname !== '/' && <Navbar />}
      {!isMobilePath  && <MobileRedirection/>}
      {!isMobilePath && <Playground />}
      <Analytics />

      {isMobilePath && <Footer />}
    </>
  );
};

export default MyApp;
