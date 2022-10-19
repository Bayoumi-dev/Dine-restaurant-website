import { FC } from 'react'
import { IEventsData } from '../interfaces/index.interface'
import Button from './Button'

interface Props extends IEventsData {}

const EventContent: FC<Props> = ({ eventsData, events }) => {
   const eventDataToShow = () =>
      eventsData.filter(eventData => eventData.name === events)

   return (
      <div
         className="max-w-[457px] xl:max-w-[27.8125rem] h-[245px] 
         md:h-[281px] mx-auto relative">
         <h2>{eventDataToShow()[0].name}</h2>
         <p className="mt-3 md:mt-5 mb-7 md:mb-14">
            {eventDataToShow()[0].paragraph}
         </p>
         <div
            className="absolute bottom-0 left-1/2 xl:left-0 
            -translate-x-1/2 xl:translate-x-0">
            <Button variant="secondary" content="Book a table" />
         </div>
      </div>
   )
}

export default EventContent
