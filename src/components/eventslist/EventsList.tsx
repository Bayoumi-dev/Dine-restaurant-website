import { FC } from 'react'
import { IEventsData } from '../../interfaces/index.interface'

interface Props extends IEventsData {}

const EventsList: FC<Props> = ({ eventsData, events, changeEvents }) => {
   return (
      <ul
         className="mt-12 md:mt-14 xl:mt-20 mb-7 md:mb-12 xl:mb-0 flex flex-col md:flex-row 
         xl:flex-col md:justify-between md:w-full gap-y-4 xl:gap-y-3 animate animate-slide-up 
         xl:animate-none">
         {eventsData.map((eventData, index) => (
            <li key={index} className="mx-9 xl:mx-0">
               <button
                  onClick={() => changeEvents?.(eventData.name)}
                  className={`text-gray opacity-50 hover:opacity-100 pb-2 xl:pb-0
                                        ${
                                           events === eventData.name
                                              ? 'active-event'
                                              : ''
                                        }`}>
                  {eventData.name}
               </button>
            </li>
         ))}
      </ul>
   )
}

export default EventsList
