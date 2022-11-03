import { FC } from 'react'
import heroBg from '../assets/homepage/hero-bg-mobile.jpg'
import heroBgTablet from '../assets/homepage/hero-bg-tablet.jpg'
import heroBgDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import Button from './Buttons'

const HeroSection: FC = () => {
   return (
      <section className="h-187 md:h-248 xl:h-205 bg-primary-codGray text-white relative">
         <picture className="w-full h-56 md:h-[23.3125rem] xl:w-360 xl:h-205 absolute xl:right-0">
            <source media="(min-width: 80em)" srcSet={heroBgDesktop} />
            <source media="(min-width: 48em)" srcSet={heroBgTablet} />
            <img
               className="mx-auto xl:w-full xl:h-full"
               src={heroBg}
               alt="hero background"
            />
         </picture>
         <div
            className="container absolute top-76 md:top-[28.125rem] xl:top-[16.0625rem]
            left-1/2 xl:left-0 transform -translate-x-1/2 xl:transform-none xl:relative z-10">
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
               <h1>
                  Exquisite dining
                  <br /> since 1989
               </h1>
               <p className="pt-5 pb-12 md:pt-10 xl:pt-6 md:pb-13 xl:pb-10 max-w-xl xl:max-w-md">
                  Experience our seasonal menu in beautiful country
                  surroundings. Eat the freshest produce from the comfort of our
                  farmhouse.
               </p>
               <Button content="Book a table" />
            </div>
         </div>
      </section>
   )
}

export default HeroSection
