import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (section) => {
    const hash = `#${section}`;
    if (location.pathname === "/") {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(`/${hash}`);
    }
  };

  return (
    <div className="fixed z-50 w-screen p-4 lg:p-10 bg-transparent md:p-8">
      <nav className="flex lg:pl-15 lg:pr-15 justify-between">
        <div className="poppins-semibold text-white flex gap-x-1 items-center">
          <div className="bg-green-400 lg:w-8 lg:h-8 w-6 h-6 rounded-2xl flex justify-center items-center lg:text-2xl">
            C
          </div>
          <h1 className="lg:text-2xl text-xl">Yash.</h1>
        </div>
        <div className="text-white lg:flex lg:flex-row lg:gap-x-10 poppins-regular justify-center items-center hidden md:flex md:flex-row md:gap-x-5">
          <button onClick={() => scrollTo("home")} className="cursor-pointer hover:text-green-400">
            Home
          </button>
          <button onClick={() => scrollTo("Projects")} className="cursor-pointer hover:text-green-400">
            Projects
          </button>
          <button onClick={() => scrollTo("skills")} className="cursor-pointer hover:text-green-400">
            Skills
          </button>
          <button onClick={() => scrollTo("certifications")} className="cursor-pointer hover:text-green-400">
            Certifications
          </button>
        </div>
        <div className="text-white poppins-regular">
          <button
            onClick={() => scrollTo("letstalk")}
            className="lg:pt-2 lg:pb-2 lg:pr-4 lg:pl-4 pt-1 pb-1 pr-2 pl-2 bg-green-400 rounded-3xl text-black poppins-semibold hover:cursor-pointer hover:bg-green-500"
          >
            Let's Talk
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;