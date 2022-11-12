import { FC } from 'react'
import { IForm } from '../../interfaces/index.interface'

const Form: FC<IForm> = ({ children, handleSubmit }) => {
   return (
      <form
         id="reservation"
         onSubmit={handleSubmit}
         className="booking-form"
         aria-label="Reservations form">
         {children}
      </form>
   )
}

export default Form
