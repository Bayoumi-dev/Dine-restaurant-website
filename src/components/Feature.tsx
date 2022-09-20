import {FC} from 'react'

interface Props {
  imgSrc: string,
  heading: string,
  paragraph: string,

}

const Feature:FC<Props> = ({imgSrc, heading, paragraph}) => {
  return (
    <div className="flex flex-col">
               <picture className='w-[327px] h-[400px] overflow-hidden shadow-3xl'>
                  <img src={imgSrc} alt="enjoyable place" className='w-full h-full object-cover' />
               </picture>
               <div
                  className="text-center mt-12 mb-24 pt-9 relative before:absolute 
                  before:top-0 before:left-0 before:w-full before:h-2 before:bg-divide 
                  before:bg-no-repeat before:bg-center">
                  <h2 className='mx-auto max-w-[220px]'>
                     {heading}
                  </h2>
                  <p className="mt-4">
                    {paragraph}
                  </p>
               </div>
            </div>
  )
}

export default Feature