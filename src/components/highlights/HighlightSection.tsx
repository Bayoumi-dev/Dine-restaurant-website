import { FC } from 'react'
import HighlightItems from './HighlightItems'

const HighlightSection: FC = () => {
   return (
      <section className="bg-primary-codGray">
         <div
            className="container py-16 md:pt-24 md:pb-18 md:px-0 xl:pt-50 xl:pb-24 
            text-center xl:text-left text-white xl:flex xl:justify-between">
            <div className="pattern-divide mb-20 max-w-md mx-auto xl:mx-0 animate animate-slide-up">
               <h2 className="max-w-xs md:max-w-md mx-auto">
                  A few highlights from our menu
               </h2>
               <p className="mt-4 md:mt-7">
                  We cater for all dietary requirements, but here’s a glimpse at
                  some of our diner’s favorites. Our menu is revamped every
                  season.
               </p>
            </div>
            <HighlightItems />
         </div>
      </section>
   )
}

export default HighlightSection
