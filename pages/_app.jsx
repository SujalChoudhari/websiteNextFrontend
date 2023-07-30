import React from 'react';
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';
import { Analytics } from '@vercel/analytics/react';
import Navbar from '../components/mobile-navbar';
import MobileRedirection from '../components/MobileRedirection';
import Footer from '../components/mobile-footer';
import Playground from '../components/Playground';
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

      {isMobilePath && (
        <>
          <NextNProgress />
          <Navbar />
        </>
      )}

      <Component {...pageProps} />
      {!isMobilePath  && <MobileRedirection/>}
      {!isMobilePath && <Playground />}
      <Analytics />

      {isMobilePath && <Footer />}
    </>
  );
};

export default MyApp;
