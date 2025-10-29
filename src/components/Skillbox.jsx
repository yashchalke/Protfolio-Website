import React from 'react'

const Skillbox = ({name}) => {
  return (
    <div className='md:w-50 md:h-20 w-25 h-10 bg-green-400 rounded-2xl flex justify-center items-center poppins-semibold md:text-xl text-[12px]'>{name}</div>
  )
}

export default Skillbox