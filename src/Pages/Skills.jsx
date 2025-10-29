import React from 'react'
import Skillbox from '../components/Skillbox'

const Skills = () => {
  return (
    <div className='relative h-full'>
        <div className='relative bg-transparent'>
            <div className='absolute w-80 md:w-100 h-100 bg-green-400 z-0 blur-[400px] left-1/2 md:top-80 transform -translate-x-1/2'></div>
            <div className='relative z-10'>
                <div className='h-fit'>
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='poppins-semibold text-white text-4xl mt-10'>Skills</h1>
                        <svg viewBox="0 0 300 100" className="md:w-30 md:h-10 w-35 h-10">
                            
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
                    <div className='flex justify-center md:p-10 p-4 gap-x-2 md:gap-x-5 flex-wrap gap-y-5'>
                        <Skillbox name="JavaScript"/>
                        <Skillbox name="React.js"/>
                        <Skillbox name="node.js"/>
                        <Skillbox name="mongoDb"/>
                        <Skillbox name="Tailwind CSS"/>
                        <Skillbox name="MySQL"/>
                        <Skillbox name="Express.js"/>
                        <Skillbox name="Python"/>
                        <Skillbox name="FastAPI"/>
                        <Skillbox name="C/C++"/>
                        <Skillbox name="Java"/>
                        <Skillbox name="Git/Github"/>
                        <Skillbox name="Docker"/>
                        <Skillbox name="Postman"/>
                        <Skillbox name="HTML"/>
                        <Skillbox name="CSS"/>
                        
                    </div>
                </div>
                </div>
                </div>
                </div>
  )
}

export default Skills