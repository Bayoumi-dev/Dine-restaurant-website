import { FC } from 'react'

interface Props {
   content: string
   variant?: string
   type?: 'button' | 'submit' | 'reset'
   className?: string
}

const Button: FC<Props> = ({ content, variant, type, className }) => {
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
