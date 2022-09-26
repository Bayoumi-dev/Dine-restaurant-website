import { FC } from 'react'

interface Props {
   imgSrc: string
   heading: string
   paragraph: string
}

const Feature: FC<Props> = ({ imgSrc, heading, paragraph }) => {
   return (
      <div
         className="flex flex-col items-center xl:flex-row xl:last:flex-row-reverse xl:justify-between 
         xl:last:-mb-20 md:last:after:absolute md:last:after:w-[160px] md:last:after:h-[76px] 
         md:last:after:bg-pattern-lines md:last:after:top-56 xl:last:after:top-[282px] md:last:after:right-0 
         xl:last:after:-right-[116px] xl:[&:last-of-type_picture]:!shadow-none relative">
         <picture
            className="w-[327px] h-[400px] md:w-[573px] md:h-[360px] xl:w-[540px] 
            xl:h-[720px] overflow-hidden shadow-3xl">
            <img
               src={imgSrc}
               alt="enjoyable place"
               className="w-full h-full object-cover"
            />
         </picture>
         <div
            className="text-center xl:text-left mt-12 md:mt-14 mb-24 md:mb-28 xl:m-0 
            pt-9 md:pt-10 xl:pt-14 relative before:absolute before:top-0 before:left-0 
            before:w-full before:h-2 before:bg-pattern-divide before:bg-no-repeat 
            before:bg-center xl:before:bg-left">
            <h2 className="mx-auto xl:mx-0 max-w-[220px] md:max-w-xs">
               {heading}
            </h2>
            <p className="mt-4 md:mt-7 max-w-[475px] xl:max-w-[445px]">
               {paragraph}
            </p>
         </div>
      </div>
   )
}

export default Feature
