import React from 'react'

const ProjectCard = ({Title,TextColor}) => {
  return (
    <div className='h-fit w-fit md:h-[400px] md:w-[400px] border-4 border-green-400 rounded-2xl p-1 bg-gray-200 flex flex-col flex-y-wrap'>
        <div className='md:h-40 h-[17vh] rounded-2xl flex justify-center items-center'>
            <h1 className='md:text-4xl text-xl poppins-semibold' style={{color:TextColor}}>{Title}</h1>
        </div>
        <div className='p-4 poppins-regular flex flex-col gap-2'>
          <p className='text-sm text-justify'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui quas maiores unde voluptatum! Error sed tempora vero dolore labore sequi, vel illo rerum quod natus? Voluptate vero exercitationem aliquam minus.</p>
          <p className='poppins-semibold'>MongoDb, React.js, Express.js, Node.js</p>
          <a className='bg-green-400 rounded-full text-center p-3 poppins-semibold hover:bg-green-500 hover:cursor-pointer'>View</a>
        </div>
    </div>
  )
}

export default ProjectCard