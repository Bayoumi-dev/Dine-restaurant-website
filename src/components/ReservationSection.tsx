import { FC } from 'react'
import ReservationHeading from './ReservationHeading'
import ReservationForm from './ReservationForm'

const ReservationSection: FC = () => {
   return (
      <section
         className="h-[600px] bg-booking bg-center bg-no-repeat bg-cover 
         mb-[534px] md:mb-[434px] xl:mb-[320px] relative">
         <div
            className="w-full max-w-[1440px] h-80 absolute top-full left-0 xl:before:absolute 
            xl:before:w-[993px] xl:before:h-80 xl:before:bg-secondary-shuttleGray 
            xl:before:opacity-[0.08] xl:before:rounded-br-[100px] xl:before:top-0 xl:before:left-0 overflow-hidden"></div>
         <div
            className="container pt-33 md:pt-40 xl:pt-64 flex flex-col items-center xl:flex-row 
            xl:items-start xl:justify-between">
            <ReservationHeading />
            <div className="w-full max-w-[540px] relative">
               <div
                  className="xl:after:absolute xl:after:w-[160px] xl:after:h-[76px] 
                  xl:after:bg-pattern-lines xl:after:-bottom-6 xl:after:-left-20 xl:after:-z-10"></div>
               <ReservationForm />
            </div>
         </div>
      </section>
   )
}

export default ReservationSection
