import React from 'react'
import ProjectCard from '../components/ProjectCard'

const Projects = () => {
  return (
    <div className=' h-fit bg-black '>
        <div className='relative bg-black'>
            <div className='absolute w-80 md:w-100 h-100 bg-green-400 z-0 blur-[200px] left-1/2 top-50 transform -translate-x-1/2'></div>
            <div className='relative z-10'>
                <div className='h-fit'>
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='poppins-semibold text-white text-4xl mt-10'>Projects</h1>
                        <svg viewBox="0 0 300 100" className="md:w-40 md:h-15 w-35 h-10">
                            
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
                    <div className='flex items-center justify-center flex-wrap gap-x-10 gap-y-5 md:pl-20 md:pr-20 p-10' >
                    <ProjectCard Title="Restro Occupancy" TextColor="#000000"/>
                    <ProjectCard Title="Shop E-Commerce" TextColor={"#000000"}/>
                    <ProjectCard Title="NexEd" TextColor={"#000000"}/>
                    
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects