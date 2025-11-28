import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ Title, TextColor, projectId, Description, Techstack }) => {
  return (
    <div className="w-[400px] max-h-[500px] border-4 border-green-400 rounded-2xl p-4 bg-gray-200 flex flex-col justify-between">
      
      {/* Title Section */}
      <div className="flex justify-center items-center h-20">
        <h1 className="text-xl md:text-3xl poppins-semibold" style={{ color: TextColor }}>
          {Title}
        </h1>
      </div>

      {/* Description & Techstack */}
      <div className="flex-grow overflow-y-auto md:max-h-[350px] flex flex-col gap-2 poppins-regular mb-4 no-scrollbar">
        <p className="text-[12px] md:text-[15px] text-justify leading-relaxed whitespace-pre-line">
          {Description}
        </p>
        <p className="poppins-semibold">{Techstack}</p>
      </div>

      {/* View Button */}
      <Link
        to={`/project/${projectId}`}
        className="bg-green-400 rounded-full text-center p-3 poppins-semibold hover:bg-green-500 hover:cursor-pointer"
      >
        View
      </Link>
    </div>
  )
}

export default ProjectCard