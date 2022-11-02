import { FC } from 'react'
import { IFieldProps } from '../../interfaces/index.interface'

const PeopleField: FC<IFieldProps> = ({ values, setPeople }) => {
   const { people } = values

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
            onClick={() =>
               setPeople && setPeople(people < 99 ? people + 1 : people)
            }
            className={`plus ${
               people === 99 ? '!cursor-default opacity-40' : ''
            }`}
         />
         <input
            type="button"
            aria-label="remove one person"
            onClick={() =>
               setPeople && setPeople(people > 1 ? people - 1 : people)
            }
            className={`minus ${
               people === 1 ? '!cursor-default opacity-40' : ''
            }`}
         />
      </fieldset>
   )
}

export default PeopleField
