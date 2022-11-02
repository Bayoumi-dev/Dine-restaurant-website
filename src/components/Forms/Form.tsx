import { FC } from 'react'
import { IForm } from '../../interfaces/index.interface'

const Form: FC<IForm> = ({ children, handleSubmit }) => {
   return (
      <form
         onSubmit={handleSubmit}
         className="booking-form mt-22 md:mt-9 xl:mt-0"
         aria-label="Reservations form">
         {children}
      </form>
   )
}

export default Form
