import { FC, useState, useEffect } from 'react'
import Logo from '../assets/logo.svg'
import { Link, useLocation } from 'react-router-dom'

const Header: FC = () => {
   const [isHome, setIsHome] = useState(true),
      { pathname } = useLocation()

   useEffect(() => setIsHome(pathname === '/' ? true : false), [pathname])

   return (
      <header
         className={`absolute ${
            isHome ? 'top-59 md:top-[23.3125rem]' : 'top-14'
         } xl:top-16 z-10 w-full`}>
         <div
            className={`container text-center ${
               !isHome && 'md:text-left'
            } xl:text-left`}>
            <Link to="/" className="w-20 h-8 md:w-[6.4375rem] md:h-10">
               <img className='animate animate-fade-in' src={Logo} alt="Logo" />
            </Link>
         </div>
      </header>
   )
}
export default Header
