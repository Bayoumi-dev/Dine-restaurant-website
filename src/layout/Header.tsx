import { FC } from 'react'
import Logo from '../assets/logo.svg'

const Header: FC = () => {
   return (
      <header className="absolute top-[236px] md:top-[373px] xl:top-16 z-10 w-full">
         <div className="container text-center xl:text-left">
            <a href="/" className="w-20 h-8 md:w-[103px] md:h-10">
               <img src={Logo} alt="Logo" />
            </a>
         </div>
      </header>
   )
}
export default Header
