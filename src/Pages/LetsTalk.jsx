import React from 'react'
import Connectform from '../components/Connectform'

const LetsTalk = () => {
  return (
    <div className='min-h-screen bg-black'>
        <div className='relative bg-transparent'>
            <div className='absolute md:w-250 h-100 w-80 bg-green-400 blur-[100px] left-1/2 top-60 transform -translate-x-1/2 z-0'></div>
            <div className='relative z-10'>
        <div className='flex justify-center'>
                        <div>
                        <h1 className='poppins-semibold text-white text-4xl mt-10'>Let's Talk</h1>
                        <svg viewBox="0 0 300 100" className="md:w-50 md:h-15 w-40 h-10">
                            
              <path
                d="M0,40 Q200,0 400,50"
                className="fill-none stroke-green-400"
                strokeWidth="5"
                strokeLinecap="round"
                strokeDasharray="400"
                strokeDashoffset="400"
              >
                <animate
                  attributeName="stroke-dashoffset"
                  from="400"
                  to="0"
                  dur="0.5s"
                  fill="freeze"
                />
              </path>
            </svg>
            </div>
        </div>
        <div className='lg:pl-70 lg:pr-70 lg:pt-10 lg:pb-10 p-4'>
            <Connectform />
        </div>
    </div>
    </div>
    </div>
    
  )
}

export default LetsTalk