import { AppProps } from 'next/app';
import '../styles/global.css'
import NextNProgress from 'nextjs-progressbar';

const nextProps = {
  color: '#2662d9',
  options: { showSpinner: false }
}
// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <NextNProgress {...nextProps} />
    <Component {...pageProps} />
    </>
  )
}