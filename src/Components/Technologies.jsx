import React from 'react'

export const Technologies = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
      <div className='flex justify-center items-center'>
        <h2 className='text-5xl md:text-6xl mb-1 md:mb-3 font-bold'>Technologies</h2>
      </div>

      {/*Buttons Sections */}
      <div className='flex flex-col  md:flex-row items-center justify-center pt-6 gap-4 '>
        <button class="p-1.5 w-60 md:w-15 h-14 bg-[#0F4C81]  border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#1764a8] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">React</span>
        </button>

        <button class="p-1.5 w-60 md:w-35 h-14 bg-[#c7c719] border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#dddd14] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">JavaScript</span>
        </button>

        <button class="p-1.5 w-60 md:w-35 h-14 bg-[#881cd0] border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#a93dd4] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">Tailwind</span>
        </button>

        <button class="p-1.5 w-60 md:w-35 h-14 bg-[#31b21a] border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#3ddc21] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">Vite</span>
        </button>

        <button class="p-1.5 w-60 md:w-35 h-14 bg-[#995f13] border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#ee8f12] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">Html</span>
        </button>

        <button class="p-1.5 w-60 md:w-35 h-14 bg-[#1c88d0] border border-white rounded-md text-sm">
          <span className="relative flex justify-center items-center bottom-1 bg-[#3db6d4] md:w-50 h-10 rounded-sm text-lg text-white border border-white shadow-button hover:transition-all hover:duration-200 hover:translate-y-1 hover:shadow-none transition-all duration-200">Css</span>
        </button>

      </div>
    </div>
  )
}
 
export default Technologies;