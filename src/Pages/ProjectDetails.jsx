import { FaGithub, FaArrowDown } from "react-icons/fa";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";

const ProjectDetails = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { projectId } = useParams();

  const projectData = {
    1: {
      title: "Restro Occupancy",
      techStack: "Python , OpenCV , HTML , CSS , MySQL",
      github: "https://github.com/yashchalke/Restro_Occupancy",
      video: "https://youtu.be/FsJ6gqfnS7s",
    },
    2: {
      title: "E-Commerce Website",
      techStack: "MongoDb, Express.js, React.js, Node.js, Tailwind CSS, Stripe",
      github: "https://github.com/yashchalke/E-Commerce-Website",
      video: "https://youtu.be/tlJQY0v9iuU",
    },
    3: {
      title: "Dev Events - Event Management App",
      techStack: "JavaScript, React.js, Node.js, Express.js, MongoDB, Tailwind CSS, Clerk Auth, HTML5-QRCode.",
      github: "https://github.com/yashchalke/Dev-events-project",
      video: "https://youtu.be/VpQFlhGxC-M",
    },
  };

  const project = projectData[projectId];

  if (!project) {
    return (
      <div className="text-white text-center md:mt-40 md:text-2xl">
        Project not found.
      </div>
    );
  }

  return (
    <div className="md:h-full h-screen bg-black md:pb-40 ">
        <div className="h-fit flex items-center justify-center">
      <div className="text-white absolute md:top-40 top-50 left-1/2 transform -translate-x-[50%] md:text-3xl z-20">
        <div className="text-center flex flex-col items-center gap-4">
          <div>
            <h1 className="poppins-semibold text-xl md:text-4xl">{project.title}</h1>
            <p className="poppins-regular text-xs md:text-lg mt-2">{project.techStack}</p>
          </div>
          <div>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-1 bg-green-400 text-black rounded-full flex items-center justify-center gap-2 hover:bg-green-500 transition w-[30vh] poppins-regular"
            >
              <FaGithub />
              Github
            </a>
          </div>
          <div>
            <h1 className="poppins-regular flex items-center gap-x-4">
              Video <FaArrowDown />
            </h1>
          </div>
        </div>
      </div>
      </div>
      <div className="relative z-10 md:pt-55 md:px-30 md:pb-10 border pt-60 px-5">
        {/* Blur background that adapts to video size */}
        <div className="absolute inset-0 z-0 flex items-center justify-center">
          <div className="bg-green-400 blur-[100px] w-[80%] h-[70%] mt-20"></div>
        </div>

        {/* Video container */}
        <div className="w-full h-full border-border-white">
        <div className="relative z-10 rounded-xl border-green-400 border-3 overflow-hidden mx-auto aspect-video">
            
          <ReactPlayer src={project.video} controls width="100%" height="100%"/>
          
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
