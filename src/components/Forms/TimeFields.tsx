import { FC } from 'react'

const TimeFields: FC = () => {
   return (
      <fieldset className="time">
         <div className="mb-2">
            <legend className="label" id="time">
               Pick a time
            </legend>
         </div>
         <div className="inputs" aria-labelledby="time" tabIndex={0}>
            <input
               name="hour"
               type="number"
               placeholder="09"
               aria-label="hour"
            />
            <input
               name="minute"
               type="number"
               placeholder="00"
               aria-label="minute"
            />
            <div className="midday">
               <input
                  id="midday"
                  name="midday"
                  type="text"
                  value={'AM'}
                  aria-label="12-hour system"
                  aria-atomic="true"
                  readOnly
                  tabIndex={-1}
               />
               <button
                  type="button"
                  aria-expanded='false'
                  aria-controls="12-hour-system midday"
                  aria-label="Choose AM or PM"
                  aria-haspopup="listbox">
                  <span></span>
               </button>
               <ul
                  id="12-hour-system"
                  role="listbox"
                  aria-labelledby="midday"
                  tabIndex={-1}
                  className='invisible'>
                  <li
                     role="option"
                     aria-checked='true'
                     aria-selected='true'
                     tabIndex={0}>
                     AM
                  </li>
                  <li
                     role="option"
                     aria-checked='false'
                     aria-selected= 'false'
                     tabIndex={-1}>
                     PM
                  </li>
               </ul>
            </div>
         </div>
      </fieldset>
   )
}

export default TimeFields
