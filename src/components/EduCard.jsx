import { University } from 'lucide-react'
import React from 'react'

const EduCard = ({name,uni,Score,imgurl,year,course}) => {
  return (
    <div className='lg:w-100 lg:h-110 w-110 h-110 bg-white rounded-xl p-4 flex md:flex-col gap-y-4 gap-x-2 justify-center items-center flex-wrap'>
        <div className='flex justify-center md:w-[100px] w-[60px]'>
            <img src={imgurl} className='md:w-50'/>
        </div>
        <div className=''>
            <h1 className='poppins-bold'>{name}</h1>
            <h1 className='poppins-bold text-red-500'>{course}</h1>
            <h2 className='poppins-semibold'>{uni}</h2>
            <h2 className='text-green-400 poppins-semibold'>{Score}</h2>
            <h2 className='poppins-regular'>{year}</h2>
        </div>

    </div>
  )
}

export default EduCard