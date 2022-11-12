import { FC } from 'react'
import ReservationHeading from './ReservationHeading'
import ReservationForm from './ReservationForm'

const ReservationSection: FC = () => {
   return (
      <section
         className="h-150 bg-booking bg-center bg-no-repeat bg-cover bg-fixed
         mb-[33.375rem] md:mb-[27.125rem] xl:mb-80 relative">
         <div
            className="w-full max-w-[1920px] h-80 absolute top-full left-2/4 -translate-x-2/4 
            xl:before:absolute xl:before:w-248 xl:before:h-80 xl:before:bg-secondary-shuttleGray 
            xl:before:opacity-[0.08] xl:before:rounded-br-[6.25rem] xl:before:top-0 
            xl:before:left-0 overflow-hidden"></div>
         <div
            className="container pt-33 md:pt-40 xl:pt-64 flex flex-col 
            items-center xl:flex-row xl:items-start xl:justify-between 
            animate animate-fade-in">
            <ReservationHeading />
            <div
               className="w-full max-w-[33.75rem] mt-22 md:mt-9 xl:mt-0 bg-white 
               p-8 md:p-12 shadow-3xl relative">
               <div
                  className="xl:after:absolute xl:after:w-40 xl:after:h-19 
                  xl:after:bg-pattern-lines xl:after:bg-no-repeat xl:after:-bottom-6 
                  xl:after:-left-20 xl:after:-z-10"></div>
               <ReservationForm />
            </div>
         </div>
      </section>
   )
}

export default ReservationSection
