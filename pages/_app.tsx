import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return (
    <>
    <NextNProgress color='#2662d9' options={{ showSpinner: false }} />
    <Component {...pageProps} />
    </>
  )
}