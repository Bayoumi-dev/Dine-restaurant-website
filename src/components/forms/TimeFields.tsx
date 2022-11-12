/* eslint-disable react-hooks/exhaustive-deps */
import { FC, useState, useEffect, useRef } from 'react'
import listBoxBehavior from '../../helpers/listBoxBehavior'
import { IFieldProps } from '../../interfaces/index.interface'

const TimeFields: FC<IFieldProps> = ({
   handleChange,
   values,
   errorMsg,
   setMidday,
}) => {
   const [isMiddayListOpen, setIsMiddayListOpen] = useState(false)
   const middayListRef = useRef<HTMLUListElement>(null)
   const { hour, minute, midday } = values.time

   // The Mounting function
   useEffect(() => {
      middayListRef.current?.addEventListener('click', selectOption)
   }, [])

   // Handling outside clicks & list box behavior
   useEffect(() => {
      if (isMiddayListOpen) {
         setTimeout(() => window.addEventListener('click', closeMiddayList), 0)
         middayListRef.current && listBoxBehavior(middayListRef.current)
      }
      // Cleanup function to clean event listener from window
      return () => {
         window.removeEventListener('click', closeMiddayList)
      }
   }, [isMiddayListOpen])

   // Open midday list
   const openMiddayList = () => setIsMiddayListOpen(true)
   // Open midday list
   const closeMiddayList = () => setIsMiddayListOpen(false)

   const selectOption = (e: Event) => {
      const targetValue = (e.target as HTMLLIElement).dataset.value
      if (targetValue === 'AM' || targetValue === 'PM')
         setMidday && setMidday(targetValue)
   }

   return (
      <fieldset className={`time ${errorMsg && errorMsg.time ? 'error' : ''}`}>
         <div className="mb-2">
            <legend className="label" id="time">
               Pick a time
            </legend>
            {errorMsg && errorMsg.time && (
               <div className="error-msg">{errorMsg.time}</div>
            )}
         </div>
         <div className="inputs" aria-labelledby="time" tabIndex={0}>
            <input
               name="time.hour"
               type="number"
               placeholder="09"
               aria-label="hour"
               onChange={handleChange}
               value={hour}
            />
            <input
               name="time.minute"
               type="number"
               placeholder="00"
               aria-label="minute"
               onChange={handleChange}
               value={minute}
            />
            <div className="midday">
               <input
                  id="midday"
                  name="time.midday"
                  type="text"
                  aria-label="12-hour system"
                  aria-atomic="true"
                  readOnly
                  tabIndex={-1}
                  value={midday}
               />
               <button
                  type="button"
                  onClick={openMiddayList}
                  aria-expanded={isMiddayListOpen ? 'true' : 'false'}
                  aria-controls="12-hour-system midday"
                  aria-label="Choose AM or PM"
                  aria-haspopup="listbox">
                  <span></span>
               </button>
               <ul
                  ref={middayListRef}
                  id="12-hour-system"
                  className={isMiddayListOpen ? 'block' : 'hidden'}
                  role="listbox"
                  aria-labelledby="midday"
                  tabIndex={-1}>
                  <li
                     role="option"
                     aria-selected={midday === 'AM' ? 'true' : 'false'}
                     tabIndex={midday === 'AM' ? 0 : -1}
                     data-value="AM">
                     AM
                  </li>
                  <li
                     role="option"
                     aria-selected={midday === 'PM' ? 'true' : 'false'}
                     tabIndex={midday === 'PM' ? 0 : -1}
                     data-value="PM">
                     PM
                  </li>
               </ul>
            </div>
         </div>
      </fieldset>
   )
}

export default TimeFields
