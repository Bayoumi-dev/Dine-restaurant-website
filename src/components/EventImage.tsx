import { FC } from 'react'
import { IEventsData } from '../interfaces/index.interface'

interface Props extends IEventsData {}

const EventImage: FC<Props> = ({ eventsData, events }) => {
   return (
      <div
         className="w-[326px] h-[400px] md:w-[573px] md:h-[360px] xl:w-[540px] xl:h-[600px] 
         shadow-3xl relative md:after:absolute md:after:w-[160px] md:after:h-[76px] 
         md:after:bg-pattern-lines md:after:-top-10 md:after:-left-[38px] xl:after:-left-10 ">
         <ul className="w-full h-full overflow-hidden">
            {eventsData.map((eventData, index: number) => (
               <li className="w-full h-full" key={index}>
                  <picture>
                     <source
                        media="(min-width: 1280px)"
                        srcSet={eventData.img[2]}
                     />
                     <source
                        media="(min-width: 768px)"
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
   )
}

export default EventImage
