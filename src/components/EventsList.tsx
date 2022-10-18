import { FC } from 'react'
import { IEventsData } from '../interfaces/index.interface'

interface Props extends IEventsData {}

const EventsList: FC<Props> = ({ eventsData, events }) => {
   return (
      <ul className="mt-12 mb-7 flex flex-col gap-y-4">
         {eventsData.map((eventData, index) => (
            <li key={index}>
               <button
                  className={`text-gray opacity-50 hover:opacity-100
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
