import { FC } from 'react'
import { IEventsData } from '../../interfaces/index.interface'
import Button from '../Buttons'

interface Props extends IEventsData {}

const EventContent: FC<Props> = ({ eventsData, events }) => {
   const eventDataToShow = () =>
      eventsData.filter(eventData => eventData.name === events)

   return (
      <div
         className="max-w-[28.5625rem] xl:max-w-[27.8125rem] h-[15.3125rem] 
         md:h-70 mx-auto relative animate animate-slide-up xl:animate-none">
         <h2>{eventDataToShow()[0].name}</h2>
         <p className="mt-3 md:mt-5 mb-7 md:mb-14">
            {eventDataToShow()[0].paragraph}
         </p>
         <div
            className="absolute bottom-0 left-1/2 xl:left-0 
            -translate-x-1/2 xl:translate-x-0">
            <Button variant="secondary" content="Book a table" link="booking" />
         </div>
      </div>
   )
}

export default EventContent
