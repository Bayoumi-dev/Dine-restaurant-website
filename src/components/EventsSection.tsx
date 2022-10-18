import { FC, useState } from 'react'
import { eventsData } from '../utils/_DATA'
// Components
import EventContent from './EventContent'
import EventImage from './EventImage'
import EventsList from './EventsList'

const EventsSection: FC = () => {
   const [events] = useState('Family Gathering')
   return (
      <section>
         <div className="container pt-20 pb-31 md:py-30 flex flex-col items-center text-center">
            <EventImage eventsData={eventsData} events={events} />
            <div className="w-full">
               <EventsList eventsData={eventsData} events={events} />
               <EventContent eventsData={eventsData} events={events} />
            </div>
         </div>
      </section>
   )
}

export default EventsSection
