import { FC } from 'react'
import { IFieldProps } from '../../interfaces/index.interface'

const Field: FC<IFieldProps> = ({ name, handleChange, values, errorMsg }) => {
   return (
      <label className={errorMsg && errorMsg[name as never] ? 'error' : ''}>
         <input
            name={name}
            type="text"
            placeholder={name}
            aria-label={name}
            onChange={handleChange}
            value={values[name as never]}
         />
         {errorMsg && errorMsg[name as never] && (
            <div className="error-msg">{errorMsg[name as never]}</div>
         )}
      </label>
   )
}

export default Field
