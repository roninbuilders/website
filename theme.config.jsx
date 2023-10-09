import Image from "next/image"

export default {
  logo: (
    <>
      <Image src="/Ronin_Mark_Blue.svg" alt="" width={18} height={25} style={{ marginRight: "10px" }} />
      <p style={{
        fontWeight: 700,
        color: "#2662d9"
      }}>Main</p>
    </>
  ),
  project: {
    link: 'https://github.com/ronin-builders'
  },
  docsRepositoryBase:"https://github.com/ronin-builders/website",
  footer: {
    component: null
  },
  feedback: {
    content: "Open an issue in the docs repository"
  },
  gitTimestamp: null,
  head: (
    <>
      <title>Ronin Builders | Community</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/Ronin_Mark_Neon.svg" />
      <meta property="og:image" content="/homepage-hero.png"/>
      <meta property="og:title" content="Ronin Builders" />
      {/* <meta property="og:url" content="http://" /> */}
      <meta property="og:description" content="Typescript tools for the Ronin Network. Community driven organization." />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}