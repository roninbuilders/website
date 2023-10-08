import s from '../styles/home.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={s.container}>
      <span>
        <Image src="/Ronin_Mark_Neon.svg" alt="" width={240} height={326} />
        <p className={s.title} >onin Builders</p>
      </span>
      <p className={s.description} >Building Typescript tools for the Ronin Network.</p>
    </div>
  )
}

export default Header