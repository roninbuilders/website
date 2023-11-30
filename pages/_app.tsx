import { AppProps } from 'next/app';
import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';
import Head from 'next/head';

const nextProps = {
  color: '#2662d9',
  options: { showSpinner: false }
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
    <meta property="og:title" content="Ronin Builders" />
    </Head>
    <NextNProgress {...nextProps} />
    <Component {...pageProps} />
    </>
  )
}