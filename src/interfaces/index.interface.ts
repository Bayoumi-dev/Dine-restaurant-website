export interface IEventsData {
   eventsData: {
      name: string
      paragraph: string
      img: string[]
   }[]
   events: string
   changeEvents?: (event: string) => void
}
export interface IFormState {
   status: string
   values: IValues
   errorMsg: IErrorMsg
}
export interface IValues {
   name: string
   email: string
   people: number
   date: {
      month: string
      day: string
      year: string
   }
   time: {
      hour: string
      minute: string
      midday: string
   }
}
export interface IErrorMsg {
   name?: string
   email?: string
   date?: string
   time?: string
}
export interface IForm {
   children: React.ReactNode
   handleSubmit: (e: React.FormEvent) => void
}
export interface IFieldProps {
   name?: string
   handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
   values: IValues
   errorMsg?: IErrorMsg
   setMidday?: (midday: 'AM' | 'PM') => void
   setPeople?: (people: number) => void
}
export interface IReservedMsgProps {
   values: IValues
}