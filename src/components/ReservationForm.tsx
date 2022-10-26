import { FC } from 'react'
import Button from './Button'
import DateFields from './Forms/DateFields'
import TimeFields from './Forms/TimeFields'

const ReservationForm: FC = () => {
   return (
      <form
         action="#"
         className="booking-form">
         <input name="name" type="text" placeholder="name" aria-label="name" />
         <input
            name="email"
            type="text"
            placeholder="email"
            aria-label="email"
         />
         <DateFields />
         <TimeFields />
         <fieldset className="people" aria-label="">
            <input
               type="text"
               name="people"
               value="4 people"
               aria-label="people"
               readOnly
            />
            <input type="button" className="plus" />
            <input type="button" className="minus" />
         </fieldset>
         <Button content="Make Reservation" variant="secondary" type="submit" />
      </form>
   )
}

export default ReservationForm
