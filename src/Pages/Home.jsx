import React from "react";
import InfiniteCarousal from "../components/InfiniteCarousal";
import Projects from "./Projects";
import Skills from "./Skills";
import Certifications from "./Certifications";
import Education from "./Education";
import LetsTalk from "./LetsTalk";
import { Download } from "lucide-react";
const Home = () => {
  return (
    <div className="bg-black min-h-screen relative ">
      <div className="absolute md:top-20 md:right-60 right-20 top-30 transform -translate-x-1/2 -translate-y-1/2 z-20">
      <img src="/Logos/cursor.svg" className="h-10 md:h-15"/>
  </div>

      
      <div className="text-white poppins-regular ">
        <h1 className="flex justify-center md:text-5xl text-xl">Hey, There</h1>
        <h1 className="flex justify-center md:text-5xl text-3xl md:mt-5 mt-2 word-space">
          I Am
          <div className="text-green-400 ml-3">
            Yash Chalke.
            <svg viewBox="0 0 300 100" className="md:w-70 md:h-15 w-45 h-10">
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
        </h1>
      </div>

      <div className="relative bg-black">
        {/* Blurred background */}

        <div className="absolute inset-20 md:inset-20 bg-green-400 z-0 md:blur-[200px] blur-3xl"></div>

        {/* Paragraph on top */}
        <div className="relative z-10">
          <p className="text-gray-300 md:p-20 p-10 text-sm mt-10 poppins-regular md:text-xl text-justify">
            Enthusiastic and fast-learning{" "}
            <span className="text-green-400 poppins-semibold">
              full stack web developer
            </span>{" "}
            with hands-on experience in building multiple mini projects.
            Proficient in leveraging AI tools to enhance development workflows
            and solve complex problems efficiently. Passionate about creating
            scalable, user-centric web applications and continuously expanding
            technical expertise.
          </p>
        </div>
      </div>
      <div>
        <InfiniteCarousal />
      </div>
      <div>
        <Projects />
      </div>
      <div>
        <Skills />
      </div>
      <div>
        <Certifications />
      </div>
      {/* <div>
        <Education />
      </div> */}
      <div>
        <LetsTalk />
      </div>
    </div>
  );
};

export default Home;
