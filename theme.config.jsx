export default {
  logo: <span>Ronin Builders</span>,

  project: {
    link: 'https://github.com/ronin-builders'
  },
  docsRepositoryBase:"https://github.com/ronin-builders/website",
  footer: {
    text: `MIT ${new Date().getFullYear()} © Ronin Builders.`
  },
  feedback: {
    content: "Open an issue in the docs repository"
  },
  head: (
    <>
      <title>Ronin Builders | Community</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/Ronin_Mark_Neon.svg" />
      <meta property="og:image" content="/homepage-hero.png"/>
      <meta property="og:title" content="Ronin Builders" />
      {/* <meta property="og:url" content="http://" /> */}
      <meta property="og:description" content="Typescript tools for Ronin Network. Community driven organization." />

      <meta name="twitter:card" content="summary_large_image" />
    </>
  )
}