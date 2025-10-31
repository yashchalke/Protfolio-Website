import React from 'react'

const Footer = () => {
  return (
    <div className=' h-30 bg-black flex flex-col items-center pt-10 z-50 bottom-0'>
        <div className='flex justify-center'>
        <h1 className='poppins-medium text-white md:text-xl text-[15px] z-30'>
            Designed & Developed by <span className='text-green-300'>Yash Chalke.</span>
        </h1>
        </div>
        <p className='text-white poppins-regular text-[10px] md:text-[12px]'>Created using React.js, Tailwind CSS & Powered by Formspree.</p>

    </div>
  )
}

export default Footer