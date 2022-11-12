import { FC } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assets/logo.svg'

const Footer: FC = () => {
   return (
      <footer className="bg-primary-codGray">
         <div className="container py-20 text-center md:text-left md:flex animate animate-fade-in">
            <Link to="/" className="w-[6.46375rem] h-10">
               <img src={Logo} alt="Logo" />
            </Link>

            <div 
               className="uppercase text-sm leading-7 font-normal text-white tracking-widest 
               md:ml-32 xl:ml-48 xl:flex">
               <div className="mt-10 mb-8 md:mt-0 xl:mb-0 xl:mr-44">
                  <div>Marthwaite, Sedbergh<br />
                     Cumbria</div>
                  <div>+00 44 123 4567</div>
               </div>

               <div>
                  OPEN TIMES<br />
                  MON - FRI: 09:00 AM - 10:00 PM<br />
                  SAT - SUN: 09:00 AM - 11:30 PM<br />
               </div>
            </div>
         </div>
      </footer>
   )
}

export default Footer
