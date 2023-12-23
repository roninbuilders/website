import s from '../styles/home.module.css'
import Image from 'next/image'
import Button from './Button'

const Header = () => {
  return (
    <div className={s.container}>
      <span>
        <Image priority={true} src="/Ronin_Mark_Neon.svg" alt="" width={240} height={326} />
        <p className={s.title} >onin Builders</p>
      </span>
      <p className={s.description} >Building Typescript tools for the Ronin Network.</p>
      <div style={{ display: 'flex', gap: '10px' }} >
      <Button arrow label='Getting Started' target='/modal' />
      </div>
    </div>
  )
}

export default Header