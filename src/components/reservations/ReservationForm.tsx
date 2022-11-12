import { FC, ChangeEvent, FormEvent, useState, useEffect } from 'react'
import Button from '../Buttons'
import Field from '../forms/Field'
import DateFields from '../forms/DateFields'
import PeopleField from '../forms/PeopleField'
import TimeFields from '../forms/TimeFields'
import {
   checkValidName,
   checkValidEmail,
   checkValidDate,
   checkValidTime,
} from '../../helpers/validation'
import Form from '../forms/Form'
import {
   IFormState,
   IValues,
   IErrorMsg,
} from '../../interfaces/index.interface'
import ReservedMessage from './ReservedMessage'

const initialState = {
   status: 'idle',
   errorMsg: {},
   values: {
      name: '',
      email: '',
      people: 4,
      date: {
         month: '',
         day: '',
         year: '',
      },
      time: {
         hour: '',
         minute: '',
         midday: 'AM',
      },
   },
}

const ReservationForm: FC = () => {
   const [formState, setFormState] = useState<IFormState>(initialState),
      { status, errorMsg, values } = formState

   useEffect(() => {
      ;(status === 'submitted' || status === 'errors') && console.log(formState)
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [status])

   const handleSubmit = (e: FormEvent) => {
      e.preventDefault()
      // Check Validation
      validation(values)
         ? setFormState((currState: IFormState) => ({
              ...currState,
              status: 'submitted',
              errorMsg: {},
           }))
         : setFormState((currState: IFormState) => ({
              ...currState,
              status: 'errors',
           }))
   }

   // Form data validation
   const validation = (values: IValues) => {
      const { name, email, date, time } = values
      formState.errorMsg = {
         name: checkValidName(name),
         email: checkValidEmail(email),
         date: checkValidDate(date.month, date.day, date.year),
         time: checkValidTime(time.hour, time.minute),
      }
      return CheckErrors(formState.errorMsg) ? false : true
   }

   const CheckErrors = (errorMsg: IErrorMsg) => {
      let errors = false
      Object.values(errorMsg).forEach((value: string) => {
         if (value) errors = true
      })
      return errors
   }

   const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
      const inputName = e.target.name,
         inputValue = e.target.value

      // Limit character length
      if (
         inputName === 'date.month' ||
         inputName === 'date.day' ||
         inputName === 'time.hour' ||
         inputName === 'time.minute'
      )
         `${inputValue}`.length <= 2 && setValues(inputName, inputValue)
      else if (inputName === 'date.year')
         `${inputValue}`.length <= 4 && setValues(inputName, inputValue)
      else setValues(inputName, inputValue)

      // Check input if there is an error
      status === 'errors' && inputChecker(inputName, inputValue)
   }

   const inputChecker = (inputName: string, value: string) => {
      const { month, day, year } = values.date,
         { hour, minute } = values.time

      if (inputName === 'name') setErrorMsg('name', checkValidName(value))
      if (inputName === 'email') setErrorMsg('email', checkValidEmail(value))
      if (inputName === 'date.month')
         setErrorMsg('date', checkValidDate(value, day, year))
      if (inputName === 'date.day')
         setErrorMsg('date', checkValidDate(month, value, year))
      if (inputName === 'date.year')
         setErrorMsg('date', checkValidDate(month, day, value))
      if (inputName === 'time.hour')
         setErrorMsg('time', checkValidTime(value, minute))
      if (inputName === 'time.minute')
         setErrorMsg('time', checkValidTime(hour, value))
   }

   const setValues = (name: string, value: string) => {
      const keyName = name.split('.'),
         isNested = keyName.length > 1
      !isNested
         ? setFormState((currState: IFormState) => ({
              ...currState,
              values: {
                 ...currState.values,
                 [keyName[0]]: value,
              },
           }))
         : setFormState((currState: any) => ({
              ...currState,
              values: {
                 ...currState.values,
                 [keyName[0]]: {
                    ...currState.values[keyName[0]],
                    [keyName[1]]: value,
                 },
              },
           }))
   }

   const setErrorMsg = (name: string, msg: string) =>
      setFormState((currState: IFormState) => ({
         ...currState,
         errorMsg: {
            ...currState.errorMsg,
            [name]: msg,
         },
      }))

   const setMidday = (midday: 'AM' | 'PM') =>
      setFormState((currState: IFormState) => ({
         ...currState,
         values: {
            ...currState.values,
            time: {
               ...currState.values.time,
               midday,
            },
         },
      }))

   const setPeople = (people: number) =>
      setFormState((currState: IFormState) => ({
         ...currState,
         values: {
            ...currState.values,
            people,
         },
      }))

   return (
      <>
         {status === 'submitted' ? (
            <ReservedMessage values={values} />
         ) : (
            <Form handleSubmit={handleSubmit}>
               <Field
                  name="name"
                  handleChange={handleChange}
                  values={values}
                  errorMsg={errorMsg}
               />
               <Field
                  name="email"
                  handleChange={handleChange}
                  values={values}
                  errorMsg={errorMsg}
               />
               <DateFields
                  handleChange={handleChange}
                  values={values}
                  errorMsg={errorMsg}
               />
               <TimeFields
                  handleChange={handleChange}
                  values={values}
                  errorMsg={errorMsg}
                  setMidday={setMidday}
               />
               <PeopleField values={values} setPeople={setPeople} />
               <Button
                  content="Make Reservation"
                  variant="secondary"
                  type="submit"
               />
            </Form>
         )}
      </>
   )
}

export default ReservationForm
