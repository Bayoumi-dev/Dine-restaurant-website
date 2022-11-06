import { FC, useState } from 'react'
import Logo from '../assets/logo.svg'

const Header: FC = () => {
   const [isHome] = useState(true)
   return (
      <header
         className={`absolute ${
            isHome ? 'top-59 md:top-[23.3125rem]' : 'top-14'
         } xl:top-16 z-10 w-full`}>
         <div className={`container text-center ${!isHome && 'md:text-left'} xl:text-left`}>
            <a href="/" className="w-20 h-8 md:w-[6.4375rem] md:h-10">
               <img src={Logo} alt="Logo" />
            </a>
         </div>
      </header>
   )
}
export default Header
