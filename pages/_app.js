import '../styles/globals.css'

import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <title>Sujal Choudhari </title>
    </Head>
    <NextNProgress />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
