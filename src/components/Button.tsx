import { FC } from 'react'

interface Props {
   content: string
}
const Button: FC<Props> = ({ content }) => {
   return (
      <button className="w-[245px] h-[64px] border border-white hover:bg-white 
      hover:text-secondary-mirage active:text-white active:bg-transparent active:opacity-25">
         {content}
      </button>
   )
}

export default Button
