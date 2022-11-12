import { FC, useEffect } from 'react'
import ReservationSection from '../components/reservations/ReservationSection'

const Booking: FC = () => {
   useEffect(() => {
      document.title = 'Booking'
      window.scrollTo(0, 0)
   }, [])

   return <ReservationSection />
}

export default Booking
