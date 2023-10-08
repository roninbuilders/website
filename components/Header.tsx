import s from '../styles/home.module.css'
import Image from 'next/image'

const Header = () => {
  return (
    <div className={s.container}>
      <Image src="/Ronin_Mark_Neon.svg" alt="" width={240} height={326} />
      <p>onin Builders</p>
    </div>
  )
}

export default Header