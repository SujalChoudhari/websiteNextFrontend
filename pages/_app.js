import '../styles/globals.css'

import NextNProgress from 'nextjs-progressbar';
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Head from 'next/head'
import Script from 'next/script';

function MyApp({ Component, pageProps }) {
  return (<>

    <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

    <Script strategy="lazyOnload">
      {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
    </Script>
    <Head>
      <title>Sujal Choudhari </title>
      <meta name="description" content="Sujal Choudhari's Personal Website" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#000000" />
    </Head>
    <NextNProgress />
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>)
}

export default MyApp
