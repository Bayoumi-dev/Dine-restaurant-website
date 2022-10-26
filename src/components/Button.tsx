import { FC } from 'react'

interface Props {
   content: string
   variant?: string
   type?: 'button' | 'submit' | 'reset'
}

const Button: FC<Props> = ({ content, variant, type }) => {
   return (
      <button
         type={type && type}
         className={`btn ${!variant ? 'primary' : 'secondary'}`}>
         {content}
      </button>
   )
}

export default Button
