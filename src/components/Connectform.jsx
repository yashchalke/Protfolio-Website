import React from 'react'
import { Linkedin,Github,Mail,Download} from 'lucide-react'
const Connectform = () => {
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=chalkeyashkrishna@gmail.com`;

  return (
   <div className='h-140 md:h-150 bg-gray-900 border-4 border-green-400 rounded-2xl mt-12 md:mt-2 p-5 md:p-10'>
    <h1 className="text-white poppins-semibold text-xl">
            Connect Using Social Media
    </h1>
    <div className='flex flex-wrap md:items-center md:justify-between gap-y-4 flex-col md:flex-row'>
    <div className='flex gap-x-4 mt-2'>
            <a
                href="https://www.linkedin.com/in/yash-chalke-97144527b"
                className="bg-blue-500 lg:p-5 rounded-3xl p-3"
              >
                <Linkedin />
              </a>
              <a
                href="https://github.com/yashchalke"
                className="bg-gray-500 lg:p-5 rounded-3xl p-3"
              >
                <Github />
              </a>
              <a
                href={gmailLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-orange-600 lg:p-5 rounded-3xl p-3"
              >
                <Mail />
              </a>

    </div>
            <div>
              <a
                href="/Resume/Yash_Chalke_FullStackDeveloper_Resume.pdf"
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <button className="text-black bg-green-400 pt-4 pb-4 pl-6 pr-6 rounded-4xl flex gap-x-2 items-center hover:cursor-pointer poppins-regular">
                  <Download />
                  Download Resume
                </button>
              </a>
            </div>
            </div>
            <div className='mt-5'>
                <form className=" flex flex-col md:gap-y-6 gap-y-4">
          <div className="flex flex-col md:gap-y-3 gap-y-1">
            <label className="poppins-semibold text-white md:text-xl text-[15px]">Name</label>
            <input
              type="text"
              className="w-full bg-white rounded md:p-4 p-2"
              placeholder="Enter Your Name"
            />
          </div>
          <div className="flex flex-col md:gap-y-3 gap-y-1">
            <label className="poppins-semibold text-white md:text-xl text-[15px]">Email</label>
            <input
              type="text"
              className="w-full bg-white rounded md:p-4 p-2"
              placeholder="Enter Your Email"
            />
          </div>
          <div className="flex flex-col md:gap-y-3 gap-y-1">
            <label className="poppins-semibold text-white md:text-xl text-[15px]">
              Phone Number
            </label>
            <input
              type="number"
              className="w-full bg-white rounded md:p-4 p-2"
              placeholder="Enter Your Phone Number"
            />
          </div>
          <input
            type="submit"
            placeholder="Submit"
            className="p-4 bg-green-400 rounded-xl poppins-semibold"
          />
        </form>
            </div>

   </div>
  );
}

export default Connectform