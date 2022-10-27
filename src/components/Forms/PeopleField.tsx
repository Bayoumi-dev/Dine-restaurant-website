import { FC, useState } from 'react'

const PeopleField: FC = () => {
   const [people, setPeople] = useState(4)

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
            onClick={() => setPeople(people < 99 ? people + 1 : people)}
            className={`plus ${
               people === 99 ? '!cursor-default active:!opacity-100' : ''
            }`}
         />
         <input
            type="button"
            aria-label="remove one person"
            onClick={() => setPeople(people > 1 ? people - 1 : people)}
            className={`minus ${
               people === 1 ? '!cursor-default active:!opacity-100' : ''
            }`}
         />
      </fieldset>
   )
}

export default PeopleField
