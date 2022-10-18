import { FC } from 'react'

interface Props {
   content: string
   variant?: string
}

const Button: FC<Props> = ({ content, variant }) => {
   return variant === 'secondary' ? (
      <button
         className="w-[245px] h-[64px] bg-primary-codGray text-white 
         hover:border border-primary-codGray hover:bg-white 
        hover:text-secondary-mirage active:bg-transparent active:opacity-25">
         {content}
      </button>
   ) : (
      <button
         className="w-[245px] h-[64px] border border-white hover:bg-white 
        hover:text-secondary-mirage active:text-white active:bg-transparent 
          active:opacity-25">
         {content}
      </button>
   )
}

export default Button
