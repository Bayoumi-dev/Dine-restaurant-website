import { FC } from 'react'
import Features from './Features'

const FeaturesSection: FC = () => {
   return (
      <section className="-mt-[72px] md:-mt-24 xl:-mt-[72px] relative z-10">
         <div
            className="w-full max-w-[1440px] h-full absolute left-2/4 -translate-x-2/4 md:before:absolute 
            md:before:w-[895px] md:before:h-[320px] md:before:bg-secondary-shuttleGray md:before:opacity-[0.08] 
            md:before:rounded-tr-[100px] md:before:top-[195px] xl:before:top-[320px] md:before:right-1/2 
            xl:before:left-0 md:after:absolute md:after:w-[895px] md:after:h-[320px] md:after:bg-secondary-shuttleGray 
            md:after:opacity-[0.08] md:after:rounded-tl-[100px] md:after:bottom-0 md:after:left-1/2 
            xl:after:left-unset xl:after:right-0 overflow-hidden"></div>
            <Features />
      </section>
   )
}

export default FeaturesSection
