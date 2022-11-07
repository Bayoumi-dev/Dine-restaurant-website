import { FC } from 'react'
import Features from './Features'

const FeaturesSection: FC = () => {
   return (
      <section className="-mt-18 md:-mt-24 xl:-mt-18 relative z-10">
         <div
            className="w-full max-w-[1920px] h-full absolute left-2/4 -translate-x-2/4 md:before:absolute 
            md:before:w-[55.9375rem] md:before:h-80 md:before:bg-secondary-shuttleGray md:before:opacity-[0.08] 
            md:before:rounded-tr-[6.25rem] md:before:top-[12.1875rem] xl:before:top-80 md:before:right-1/2 
            xl:before:left-0 md:after:absolute md:after:w-[55.9375rem] md:after:h-80 md:after:bg-secondary-shuttleGray 
            md:after:opacity-[0.08] md:after:rounded-tl-[6.25rem] md:after:bottom-0 md:after:left-1/2 
            xl:after:left-unset xl:after:right-0 overflow-hidden"></div>
            <Features />
      </section>
   )
}

export default FeaturesSection
