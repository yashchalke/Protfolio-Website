import React from "react";
import Certificate from "../components/Certificate";

const Certifications = () => {
  return (
    <div className="min-h-screen relative">
      <div className="flex justify-center ">
        <div className="">
          <h1 className="poppins-semibold text-white text-4xl mt-10">
            Certifications
          </h1>
          <svg viewBox="0 0 300 100" className="md:w-60 md:h-15 w-35 h-10">
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
      <div className="flex items-center justify-center flex-wrap gap-x-10 gap-y-10 md:pl-20 md:pr-20 p-10">
        <Certificate name="Prompt Design in Vertex AI Skill Badge by Google" imgurl="/certificates/Prompt_Design.png" link="https://www.credly.com/badges/084f8e7e-564e-4ab8-be18-6d223db606cc/linked_in_profile"/>
        <Certificate name="Postman API Fundamentals Student Expert" imgurl="/certificates/Postman.png" link="https://badgr.com/public/assertions/lwuECo08Sjm1iSApIqu6lA"/>
        <Certificate name="Python Crash Course by Coursera" imgurl="/certificates/Python.png" link="https://coursera.org/share/32909dfd80a1c9330b25c4dc97cce1b9"/>
      </div>
    </div>
  );
};

export default Certifications;
