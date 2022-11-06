import { FC } from 'react'
import Feature from './Feature'
// images
import enjoyablePlace from '../../assets/homepage/enjoyable-place-desktop.jpg'
import locallySourced from '../../assets/homepage/locally-sourced-desktop.jpg'

const Features: FC = () => {
   return (
      <div className="container flex flex-col xl:gap-30">
         <Feature
            imgSrc={enjoyablePlace}
            heading="Enjoyable place for all the family"
            paragraph="Our relaxed surroundings make dining with us a great experience 
               for everyone. We can even arrange a tour of the farm before your meal."
         />
         <Feature
            imgSrc={locallySourced}
            heading="The most locally sourced food"
            paragraph="All our ingredients come directly from our farm or local fishery. 
               So you can be sure that you’re eating the freshest, most sustainable food."
         />
      </div>
   )
}

export default Features
