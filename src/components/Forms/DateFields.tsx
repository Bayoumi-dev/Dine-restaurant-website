import { FC } from 'react'

const DateFields: FC = () => {
   return (
      <fieldset className="date">
         <div className="mb-2">
            <legend className="label" id="date">
               Pick a date
            </legend>
         </div>
         <div className="inputs" aria-labelledby="date" tabIndex={0}>
            <input
               name="month"
               type="number"
               placeholder="MM"
               aria-label="month"
               maxLength={2}
            />
            <input name="day" type="number" placeholder="DD" aria-label="day" />
            <input
               name="year"
               type="number"
               placeholder="YYYY"
               aria-label="year"
            />
         </div>
      </fieldset>
   )
}

export default DateFields
