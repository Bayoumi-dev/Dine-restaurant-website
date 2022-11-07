import { FC, useEffect } from 'react'
import ReservationSection from '../components/reservations/ReservationSection'

const Booking: FC = () => {
   useEffect(() => window.scrollTo(0, 0), [])

   return <ReservationSection />
}

export default Booking
