import { FC } from 'react'
import { IEventsData } from '../interfaces/index.interface'
import Button from './Button'

interface Props extends IEventsData {}

const EventContent: FC<Props> = ({ eventsData, events }) => {
   return (
      <ul className="max-w-[457px] h-[245px] overflow-hidden">
         {eventsData.map((eventData, index) => (
            <li key={index} className="w-full h-full">
               <h2>{eventData.name}</h2>
               <p className="mt-3 mb-7">{eventData.paragraph}</p>
               <Button variant="secondary" content="Book a table" />
            </li>
         ))}
      </ul>
   )
}

export default EventContent
