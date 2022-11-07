import { FC } from 'react'
import { IButtonProps } from '../interfaces/index.interface'
import { Link } from 'react-router-dom'

const Button: FC<IButtonProps> = ({
   content,
   variant,
   type,
   className,
   link,
}) => {
   return link ? (
      <Link
         to={link}
         role='button'
         type={type && type}
         className={`btn ${!variant ? 'primary' : 'secondary'} ${
            className ? className : ''
         }`}>
         {content}
      </Link>
   ) : (
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
