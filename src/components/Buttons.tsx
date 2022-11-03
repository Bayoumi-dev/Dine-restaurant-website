import { FC } from 'react'
import { IButtonProps } from '../interfaces/index.interface'

const Button: FC<IButtonProps> = ({ content, variant, type, className }) => {
   return (
      <button
         type={type && type}
         className={`btn ${!variant ? 'primary' : 'secondary'} ${
            className ? className : ''
         }`}>
         {content}
      </button>
   )
}

export default Button
