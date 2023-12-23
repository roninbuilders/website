import Link from "next/link"
import s from './styles.module.css'

type Props = {
  label: string
  target: string
  grey?: boolean
  arrow?: boolean
}

const _arrow = 
<svg color="currentColor" viewBox="0 0 24 24" width="16" height="16" fill="currentcolor">
  <path fillRule="evenodd" clipRule="evenodd" d="m15.396 17.018-1.414-1.415 3.104-3.103H4.5a1 1 0 1 1 0-2h12.586l-3.104-3.104 1.414-1.414 5.518 5.518-5.518 5.518Z" fill="">
  </path>
</svg>

export default function Button({label, target, grey, arrow}: Props) {
  return (
    <Link rel="noopener noreferrer nofollow" className={[s.button, grey ? s.secondary : ''].join(" ")} href={target} >
      {label}
      {arrow && _arrow}
    </Link>
  )
}