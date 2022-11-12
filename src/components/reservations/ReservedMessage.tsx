import { FC } from 'react'
import { IReservedMsgProps } from '../../interfaces/index.interface'

const ReservedMessage: FC<IReservedMsgProps> = ({ values }) => {
   const { name, people, date, time } = values,
      { month, day, year } = date,
      { hour, minute, midday } = time

   const DateFt: () => JSX.Element = () => (
      <div>
         {new Date(`${year}-${month}-${day}`).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
         })}
      </div>
   )

   const Time: () => JSX.Element = () => (
      <div>{`${hour.length < 2 ? `0${hour}` : hour} : ${
         minute.length < 2 ? `0${minute}` : minute
      } ${midday}`}</div>
   )

   return (
      <div className="w-full animate-fade-in">
         <h2
            className="flex items-center text-3xl font-semibold before:content-done-icon 
            before:mr-2 before:mt-3">
            Reserved!
         </h2>
         <p className="my-4">
            Thank you for your interest in booking a special event at Dine.
            Dine is an ideal location for group dinners and celebrations because
            of its stylish atmosphere.
            <br />
            <br /> Our experienced kitchen and wait staff are here to ensure you
            will have the most memorable event.
         </p>
         <div
            className="text-base md:text-xl md:leading-normal border 
            border-secondary-shuttleGray/50 mt-8 py-3 px-4">
            <div className="mb-1 font-medium">Reservation</div>
            <div className="text-sm md:text-base flex">
               <div className="mr-10 md:min-w-[8.75rem]">
                  <div
                     className="max-w-[6.25rem] md:max-w-[8.75rem] whitespace-nowrap 
                     overflow-hidden overflow-ellipsis">
                     {name}
                  </div>
                  <div>{people === 1 ? '1 person' : `${people} people`}</div>
               </div>
               <div>
                  <DateFt />
                  <Time />
               </div>
            </div>
         </div>
      </div>
   )
}

export default ReservedMessage
