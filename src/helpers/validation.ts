// Name Validation
export const checkValidName = (name: string) =>
   !name
      ? 'This field is required'
      : !/[a-zA-Z]/.test(name)
      ? 'Please provide a valid name'
      : ''

// Email Validation
export const checkValidEmail = (email: string) =>
   !email
      ? 'This field is required'
      : !isValidEmail(email)
      ? 'Please provide a valid email address'
      : ''
// is the email address valid
const isValidEmail = (email: string) =>
   /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      email
   )

// Date Validation
export const checkValidDate = (month: string, day: string, year: string) =>
   !month || !day || !year
      ? 'This field is incomplete'
      : (+month === 2 && +day > 29) ||
        (+month === 2 && +day === 29 && !Number.isInteger(+year / 4)) ||
        (+month === 4 && +day === 31) ||
        (+month === 6 && +day === 31) ||
        (+month === 9 && +day === 31) ||
        (+month === 11 && +day === 31) ||
        isNaN(new Date(`${year}-${month}-${day}`).getTime())
      ? 'Invalid date'
      : new Date(`${year}-${month}-${day}`).getTime() < new Date().getTime()
      ? 'Expired date'
      : ''

// Time Validation
export const checkValidTime = (hour: string, minute: string) =>
   hour === '' || minute === ''
      ? 'This field is incomplete'
      : +hour > 12 || +hour < 0 || +minute > 59 || +minute < 0
      ? 'Invalid time'
      : ''
