import { FC } from 'react'
import HighlightItem from './HighlightItem'
// Images
import salmonImg from '../../assets/homepage/salmon-mobile.jpg'
import beefImg from '../../assets/homepage/beef-mobile.jpg'
import chocolateImg from '../../assets/homepage/chocolate-mobile.jpg'

const HighlightItems: FC = () => {
   return (
      <div
         className="mt-14 mx-auto xl:mx-0 max-w-[35.8125rem] xl:max-w-[33.75rem]
         animate animate-fade-in">
         <HighlightItem
            imgSrc={salmonImg}
            heading="Seared Salmon Fillet"
            paragraph="Our locally sourced salmon served 
            with a refreshing buckwheat summer salad."
         />
         <HighlightItem
            imgSrc={beefImg}
            heading="Rosemary Filet Mignon"
            paragraph="Our prime beef served to your taste 
            with a delicious choice of seasonal sides."
         />
         <HighlightItem
            imgSrc={chocolateImg}
            heading="Summer Fruit Chocolate Mousse"
            paragraph="Creamy mousse combined with 
            summer fruits and dark chocolate shavings."
         />
      </div>
   )
}

export default HighlightItems
