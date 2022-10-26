import { FC } from 'react'
import Button from './Button'

const ReservationHeading: FC = () => {
   return (
      <div className="flex flex-col items-center text-white text-center">
         <h1>Reservations</h1>
         <p className="mt-3 mb-5">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
         </p>
         <div className="">
            <Button content="Reserve Place" />
         </div>
      </div>
   )
}

export default ReservationHeading
