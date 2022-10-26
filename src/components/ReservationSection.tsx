import { FC } from 'react'
import ReservationHeading from './ReservationHeading'
import ReservationForm from './ReservationForm'

const ReservationSection: FC = () => {
   return (
      <section className="h-[600px] bg-booking bg-center bg-no-repeat bg-cover mb-[534px]">
         <div className="container pt-33">
            <ReservationHeading />
            <ReservationForm />
         </div>
      </section>
   )
}

export default ReservationSection
