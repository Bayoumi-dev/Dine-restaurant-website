import { FC } from 'react'
import heroBg from '../assets/homepage/hero-bg-mobile.jpg'
import heroBgTablet from '../assets/homepage/hero-bg-tablet.jpg'
import heroBgDesktop from '../assets/homepage/hero-bg-desktop.jpg'
import Button from './Button'

const HeroSection: FC = () => {
   return (
      <section className="h-[748px] md:h-[992px] xl:h-[820px] bg-primary-codGray text-white relative">
         <picture className="w-full h-56 md:h-[373px] xl:w-[1440px] xl:h-[820px] absolute xl:right-0">
            <source media="(min-width: 1280px)" srcSet={heroBgDesktop} />
            <source media="(min-width: 768px)" srcSet={heroBgTablet} />
            <img
               className="mx-auto xl:w-full xl:h-full"
               src={heroBg}
               alt="hero background"
            />
         </picture>
         <div
            className="container absolute top-[304px] md:top-[450px] xl:top-[257px]
         left-1/2 xl:left-0 transform -translate-x-1/2 xl:transform-none xl:relative z-10">
            <div className="flex flex-col items-center xl:items-start text-center xl:text-left">
               <h1>
                  Exquisite dining
                  <br /> since 1989
               </h1>
               <p className="pt-5 pb-12 md:pt-10 xl:pt-6 md:pb-[52px] xl:pb-10 max-w-xl xl:max-w-md">
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
