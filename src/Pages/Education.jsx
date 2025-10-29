import React from 'react'
import EduCard from '../components/EduCard'

const Education = () => {
  return (
    <div className=' min-h-screen bg-black'>
        <div className='relative bg-transparent'>
            <div className='absolute w-80 md:w-100 h-100 bg-green-400 z-0 blur-[200px] left-1/2 top-50 transform -translate-x-1/2'></div>
            <div className='relative z-10'>
                <div className='h-fit'>
                    <div className='flex justify-center'>
                        <div>
                        <h1 className='poppins-semibold text-white text-4xl mt-10'>Education</h1>
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
                    <div className='flex md:flex-row md:p-10 justify-center md:gap-x-4 gap-y-4 flex-wrap p-10'>
                        <EduCard name="Patkar Varde College ISO 9001:2015 Certified | “A+” Grade by NAAC | Best College Award (2016-17) | DBT Star Scheme awardee | India’s Education Excellence Award (2018) Berkshire Media LLC, USA"
                        course="Bachelors of Science in Information Technology"
                        uni="University of Mumbai"
                        Score="9.15 CGPA"
                        imgurl="/Logos/Patkar.jpg"
                        year = "2021 - 2024"/>
                        <EduCard name="Late Bhausaheb Hiray Institude of Computer Application"
                        course="Masters in Computer Application"
                        uni="University of Mumbai"
                        Score="8.44 CGPA"
                        imgurl="/Logos/Hiray.png"
                        year = "2024 - 2026"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
  )
}

export default Education