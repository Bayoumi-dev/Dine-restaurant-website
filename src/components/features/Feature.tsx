import { FC } from 'react'
import { IFeature } from '../../interfaces/index.interface'

const Feature: FC<IFeature> = ({ imgSrc, heading, paragraph }) => {
   return (
      <div
         className="flex flex-col items-center xl:flex-row xl:last:flex-row-reverse xl:justify-between 
         xl:last:-mb-20 md:last:after:absolute md:last:after:w-40 md:last:after:h-19 
         md:last:after:bg-pattern-lines md:last:after:bg-no-repeat md:last:after:top-56 xl:last:after:top-[17.625rem] 
         md:last:after:right-0 xl:last:after:-right-18 2xl:last:after:-right-29 xl:[&:last-of-type_picture]:!shadow-none relative">
         <picture
            className="w-[20.4375rem] h-100 md:w-[35.8125rem] md:h-90 xl:w-135 
            xl:h-180 overflow-hidden shadow-3xl animate animate-slide-up">
            <img
               src={imgSrc}
               alt={`${heading} Img`}
               className="w-full h-full object-cover"
            />
         </picture>
         <div
            className={`text-center xl:text-left mt-12 md:mt-14 mb-24 md:mb-28 xl:m-0 pattern-divide 
            animate animate-slide-up ${heading.includes('locally')?'xl:animate-slide-left':'xl:animate-slide-right'}`}>
            <h2 className="mx-auto xl:mx-0 max-w-[13.75rem] md:max-w-[21rem]">
               {heading}
            </h2>
            <p className="mt-4 md:mt-7 max-w-[29.6875rem] xl:max-w-[27.8125rem]">
               {paragraph}
            </p>
         </div>
      </div>
   )
}

export default Feature
