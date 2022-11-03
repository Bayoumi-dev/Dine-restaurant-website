import { FC, useState } from 'react'
import { eventsData } from '../../utils/_DATA'
// Components
import EventContent from './EventContent'
import EventImage from './EventImage'
import EventsList from './EventsList'

const EventsSection: FC = () => {
   const [events, setEvents] = useState('Family Gathering')
   const changeEvents = (event: string) => setEvents(event)
   window.addEventListener('resize', _ => setEvents('Family Gathering'))

   return (
      <section>
         <div
            className="w-full max-w-8xl h-full absolute -z-10 md:before:absolute 
            md:before:w-[55.9375rem] md:before:h-80 md:before:bg-secondary-shuttleGray 
            md:before:opacity-[0.08] md:before:rounded-tr-[6.25rem] md:before:top-0 
            md:before:right-1/2 xl:before:right-unset xl:-left-[5,632rem] overflow-hidden"></div>
         <div
            className="container pt-20 pb-31 md:py-30 flex flex-col xl:flex-row items-center 
            xl:justify-between text-center xl:text-left">
            <EventImage eventsData={eventsData} events={events} />
            <div className="w-full xl:w-fit xl:flex xl:flex-col-reverse">
               <EventsList
                  eventsData={eventsData}
                  events={events}
                  changeEvents={changeEvents}
               />
               <EventContent eventsData={eventsData} events={events} />
            </div>
         </div>
      </section>
   )
}

export default EventsSection
