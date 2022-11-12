import { FC } from 'react'
import Button from '../Buttons'

const ReservationHeading: FC = () => {
   return (
      <div
         className="flex flex-col items-center xl:items-start text-white 
         text-center xl:text-left">
         <h1>Reservations</h1>
         <p className="max-w-[35.8125rem] xl:max-w-md mt-3 mb-5 md:mb-0">
            We can’t wait to host you. If you have any special requirements
            please feel free to call on the phone number below. We’ll be happy
            to accommodate you.
         </p>
         <div>
            <Button
               content="Reserve Place"
               className="md:hidden"
               onClick={() => {
                  (document.getElementById('reservation') as HTMLFormElement).scrollIntoView({
                     behavior: 'smooth',
                     block: 'end',
                  })
               }}
            />
         </div>
      </div>
   )
}

export default ReservationHeading
