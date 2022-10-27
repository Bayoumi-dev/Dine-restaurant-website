import { FC, useState } from 'react'

const PeopleField: FC = () => {
   const [people, setPeople] = useState(4)

   const handlePlusBtn = (e: any) => {
      if (people < 99) {
         setPeople(people + 1)
         e.target.setAttribute('aria-label', 'One has been added')
         setTimeout(
            () => e.target.setAttribute('aria-label', 'add one person'),
            100
         )
      }
   }
   const handleMinusBtn = (e: any) => {
      if (people > 1) {
         setPeople(people - 1)
         e.target.setAttribute('aria-label', 'One has been removed')
         setTimeout(
            () => e.target.setAttribute('aria-label', 'remove one person'),
            100
         )
      } else {
         e.preventDefault()
      }
   }

   return (
      <fieldset className="people" aria-label="">
         <input
            id="people"
            type="text"
            name="people"
            value={people === 1 ? '1 person' : `${people} people`}
            aria-label="people"
            readOnly
         />
         <input
            type="button"
            aria-label="add one person"
            onClick={handlePlusBtn}
            className={`plus ${
               people === 99 ? '!cursor-default active:!opacity-100' : ''
            }`}
         />
         <input
            type="button"
            aria-label="remove one person"
            onClick={handleMinusBtn}
            className={`minus ${
               people === 1 ? '!cursor-default active:!opacity-100' : ''
            }`}
         />
      </fieldset>
   )
}

export default PeopleField
