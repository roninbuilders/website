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
  chat: {
    link: 'https://twitter.com/ronin_builders',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 462.799">
        <path fill-rule="nonzero" fill="#fff" d="M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z"/>
      </svg>
    )
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