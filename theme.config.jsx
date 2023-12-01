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
  darkMode: false,
  nextThemes: {defaultTheme: 'dark'},
  project: {
    link: 'https://github.com/roninbuilders'
  },
  docsRepositoryBase:"https://github.com/roninbuilders/website",
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
      <meta property="og:url" content="https://www.roninbuilders.dev/" />
      <meta property="og:description" content="Typescript tools for the Ronin Network." />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}