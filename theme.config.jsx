export default {
  logo: <span>Ronin Builders</span>,

  project: ()=>{
    const { asPath } = useRouter()
    console.log("theme config path: ", asPath) // conditione the GitHub link depending on the library
    return {
      link: 'https://github.com/ronin-builders'
    }
  },
  head: (
    <>
      <title>Ronin Builders | Community</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="shortcut icon" href="/Ronin_Mark_Neon.svg" />
      <meta property="og:title" content="Ronin Builders" />
      <meta property="og:description" content="Typescript tools for Ronin Network. Community driven organization." />
    </>
  )
}