import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import { useEffect, useState } from 'react'
import Loader from './components/Loader'


const App = () => {
  const [loading, setLoading] = useState(true)

  return (
        <>
    <div className="md:h-50 h-40 bg-black text-white overflow-hidden">
      <div className="relative">
        <div className="w-80 h-20 bg-green-400 rotate-[45deg] lg:left-[-100px] lg:top-[-100px] absolute blur-3xl hidden lg:block"></div>
        <div className="w-80 h-20 bg-green-400 rotate-[30deg] md:left-[400px] lg:top-[-50px] top-[-120px] absolute blur-3xl "></div>
        <div className="w-80 h-20 bg-green-400 rotate-[150deg] md:right-[400px] lg:top-[-50px] top-[-120px] absolute blur-3xl"></div>
        <div className="w-80 h-20 bg-green-400 rotate-[45deg] right-[-40px] top-[-100px] absolute blur-3xl hidden lg:block"></div>
      </div>
      <Navbar />
    </div>
    
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
    </>
    
  )
}


export default App