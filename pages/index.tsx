import Head from 'next/head'
import React from 'react'

type Props = {}

const index = (props: Props) => {
  return (
    <>
    <Head>
      <title>Ronin Builders | Community</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/Ronin_Mark_Neon.svg" />
      <meta property="og:title" content="Ronin Builders" />
      <meta property="og:description" content="Typescript tools for Ronin Network. Community driven organization." />
    </Head>
    <div>Home Page</div>
    </>
  )
}

export default index