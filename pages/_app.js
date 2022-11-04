import '../styles/globals.css'

import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'

function MyApp({ Component, pageProps }) {
  return (<>
    <Head>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.css" />
    </Head>
    <NextNProgress />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
