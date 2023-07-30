import '../styles/globals.css'

import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Playground from '../components/playground'
import Head from 'next/head'
import { Analytics } from '@vercel/analytics/react';

function MyApp({ Component, pageProps, ...appProps }) {
  return (<>
    <Head>
      <title> Sujal Choudhari </title>
      <meta name="description" content="Sujal Choudhari's Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Head>
    {appProps.router.pathname.includes("m") &&
      <>
        <NextNProgress />
        <Navbar />

      </>
    }
    <Component {...pageProps} />
    <Playground />
    <Analytics />

    {appProps.router.pathname.includes("m") &&
      <>
        <Footer />
      </>
    }



  </>)
}

export default MyApp
