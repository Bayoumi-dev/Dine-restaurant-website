import { FC } from 'react'

const PeopleField: FC = () => {
   return (
      <fieldset className="people" aria-label="">
         <input
            type="text"
            name="people"
            value="4 people"
            aria-label="people"
            readOnly
         />
         <input type="button" className="plus" />
         <input type="button" className="minus" />
      </fieldset>
   )
}

export default PeopleField
