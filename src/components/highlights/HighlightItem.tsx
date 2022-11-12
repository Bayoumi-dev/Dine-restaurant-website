import { FC } from 'react'
import { IHighlightItem } from '../../interfaces/index.interface'

const HighlightItem: FC<IHighlightItem> = ({ imgSrc, heading, paragraph }) => {
   return (
      <div
         className="flex flex-col md:flex-row items-center md:items-start h-[26.125rem] 
         md:h-30 border-b border-b-white/15 last:border-none mb-6 last:mb-0 
         animate animate-slide-up xl:animate-none">
         <picture
            className="max-w-sm h-[15.3125rem] md:w-32 md:h-24 md:mr-16 relative md:after:absolute 
            md:after:top-4 md:after:-right-8 md:after:w-8 md:after:h-[0.0625rem] 
            md:after:bg-primary-beaver">
            <img
               src={imgSrc}
               alt={`${heading} Img`}
               className="w-full h-full object-cover"
            />
         </picture>
         <div className="pt-9 md:pt-0 md:text-left">
            <h3>{heading}</h3>
            <p className="mt-2 max-w-sm md:text-base md:leading-[1.625]">
               {paragraph}
            </p>
         </div>
      </div>
   )
}

export default HighlightItem
