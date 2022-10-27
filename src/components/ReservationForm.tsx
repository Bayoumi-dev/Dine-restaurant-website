import { FC } from 'react'
import Button from './Button'
import DateFields from './Forms/DateFields'
import PeopleField from './Forms/PeopleField'
import TimeFields from './Forms/TimeFields'

const ReservationForm: FC = () => {
   return (
      <form
         action="#"
         className="booking-form mt-22 md:mt-9 xl:mt-0"
         aria-label="Reservations form">
         <input name="name" type="text" placeholder="name" aria-label="name" />
         <input
            name="email"
            type="text"
            placeholder="email"
            aria-label="email"
         />
         <DateFields />
         <TimeFields />
         <PeopleField />
         <Button content="Make Reservation" variant="secondary" type="submit" />
      </form>
   )
}

export default ReservationForm
