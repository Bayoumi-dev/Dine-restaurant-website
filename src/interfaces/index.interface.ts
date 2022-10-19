export interface IEventsData {
   eventsData: {
      name: string
      paragraph: string
      img: string[]
   }[],
   events: string,
   changeEvents?: (event: string) => void 
}