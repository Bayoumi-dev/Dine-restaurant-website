import { FC } from 'react'
import { IFieldProps } from '../../interfaces/index.interface'

const DateFields: FC<IFieldProps> = ({ handleChange, values, errorMsg }) => {
   const { month, day, year } = values.date

   return (
      <fieldset className={`date ${errorMsg && errorMsg.date ? 'error' : ''}`}>
         <div className="mb-2">
            <legend className="label" id="date">
               Pick a date
            </legend>
            {errorMsg && errorMsg.date && (
               <div className="error-msg">{errorMsg.date}</div>
            )}
         </div>
         <div className="inputs" aria-labelledby="date" tabIndex={0}>
            <input
               name="date.month"
               type="number"
               placeholder="MM"
               aria-label="month"
               onChange={handleChange}
               value={month}
               pattern="2"
            />
            <input
               name="date.day"
               type="number"
               placeholder="DD"
               aria-label="day"
               onChange={handleChange}
               value={day}
            />
            <input
               name="date.year"
               type="number"
               placeholder="YYYY"
               aria-label="year"
               onChange={handleChange}
               value={year}
            />
         </div>
      </fieldset>
   )
}

export default DateFields
