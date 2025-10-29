import React, { useEffect, useState } from 'react'

const Loader = ({ onComplete }) => {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCount(prev => {
        if (prev < 100) return prev + 10
        clearInterval(interval)
        setTimeout(onComplete, 500) // slight pause after 100%
        return 100
      })
    }, 200) // slower count (30ms per step = ~3s total)

    return () => clearInterval(interval)
  }, [onComplete])

  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white">
      <div className="text-5xl font-bold mb-4 poppins-bold">{count}%</div>
      <div className="w-16 h-16 border-t-4 border-green-400 border-opacity-50 rounded-full animate-spin"></div>
    </div>
  )
}

export default Loader