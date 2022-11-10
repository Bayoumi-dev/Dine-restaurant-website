import { FC, useState, useEffect } from 'react'
import { ArrowUpSvg } from '../utils/svg'

const ScrollButton: FC = () => {
   const [visible, setVisible] = useState(false)

   useEffect(() => {
      window.addEventListener('scroll', () => {
         if (window.scrollY > 400) {
            setVisible(true)
         } else {
            setVisible(false)
         }
      })
   }, [])

   const scrollToTop = () =>
      window.scroll({
         top: 0,
         behavior: 'smooth',
      })

   return (
      <button
         onClick={scrollToTop}
         aria-label="Scroll to top button"
         className={`w-10 h-10 flex-center bg-primary-beaver rounded-ful shadow-2xl fixed 
         bottom-7 right-7 z-50 group hover:opacity-90 opacity-0 translate-y-18 duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0'
         }`}>
         <ArrowUpSvg className="group-hover:scale-125 duration-300" />
      </button>
   )
}

export default ScrollButton
