import { FC } from 'react'
import Button from './Buttons'

const CtaSection: FC = () => {
   return (
      <section
         className="bg-ready-mobile md:bg-ready-tablet xl:bg-ready-desktop 
         bg-no-repeat bg-cover bg-center">
         <div
            className="container py-20 md:py-16 xl:py-22 flex flex-col xl:flex-row 
            xl:justify-between items-center text-center text-white animate 
            animate-slide-up xl:animate-fade-in">
            <h2 className="mb-5 xl:mb-0">Ready to make a reservation?</h2>
            <Button content="Book a table" link="booking" />
         </div>
      </section>
   )
}

export default CtaSection
