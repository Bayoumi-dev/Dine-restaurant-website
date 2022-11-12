import { FC, useEffect, useRef } from 'react'
import { IEventsData } from '../../interfaces/index.interface'

interface Props extends IEventsData {}

const EventImage: FC<Props> = ({ eventsData, events }) => {
   const imgWrapperRef = useRef<HTMLUListElement>(null)

   useEffect(() => {
      events === 'Special Events'
         ? imgTranslate(1)
         : events === 'Social Events'
         ? imgTranslate(2)
         : imgTranslate(0)
   }, [events])

   const imgTranslate = (move: number) =>
      imgWrapperRef.current &&
      (imgWrapperRef.current.style.transform = `translateY(${
         (imgWrapperRef.current.clientHeight / -3) * move
      }px)`)

   return (
      <div
         className="w-[20.375rem] h-100 md:w-[35.8125rem] md:h-90 xl:w-135 xl:h-150 
         shadow-3xl relative md:after:absolute md:after:w-40 md:after:h-19 
         md:after:bg-pattern-lines md:after:bg-no-repeat md:after:-top-10 
         md:after:-left-[2.375rem] xl:after:-left-10">
         <div
            className="w-full h-full overflow-hidden animate 
            animate-slide-up xl:animate-none">
            <ul
               ref={imgWrapperRef}
               className="duration-1000 transition-transform">
               {eventsData.map((eventData, index) => (
                  <li className="w-full h-full" key={index}>
                     <picture>
                        <source
                           media="(min-width: 80em)"
                           srcSet={eventData.img[2]}
                        />
                        <source
                           media="(min-width: 48em)"
                           srcSet={eventData.img[1]}
                        />
                        <img
                           className="w-full h-full object-cover"
                           src={eventData.img[0]}
                           alt={`${eventData.name} img`}
                        />
                     </picture>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   )
}

export default EventImage
