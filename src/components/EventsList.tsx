import { FC } from 'react'
import { IEventsData } from '../interfaces/index.interface'

interface Props extends IEventsData {}

const EventsList: FC<Props> = ({ eventsData, events }) => {
   return (
      <ul className="mt-12 md:mt-14 mb-7 md:mb-12 flex flex-col md:flex-row md:justify-between md:w-full gap-y-4">
         {eventsData.map((eventData, index) => (
            <li key={index} className='mx-9'>
               <button
                  className={`text-gray opacity-50 hover:opacity-100 pb-2
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
