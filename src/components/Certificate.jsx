import React from 'react'

const Certificate = ({name,imgurl,link}) => {
  return (
    <div className='w-110 bg-white rounded-2xl flex flex-col gap-y-4 p-10 border-4 border-green-400'>
        <div className='flex justify-center items-center h-50' >
        <img src={imgurl} className='w-60' />
        </div>
        <h1 className='poppins-semibold text-black text-xl'>{name}</h1>
        <a href={link} className='bg-green-400 p-2 rounded-3xl poppins-semibold text-center '>Verify</a>
    </div>
  )
}

export default Certificate