import React from 'react'

function PortfolioItems ({ title, imgUrl, stack, link }) {
  return (
    <div className=' border-4 border-[#0F4C81] bg-gradient-to-t from-[#135ea0] to-[#E9DAC6] rounded-md overflow-hidden'>
      <img src={imgUrl} alt="Portfolio" className='w-full h-36 md:h-48 object-cover cursor-pointer' />
      <div className='w-full p-4'>
        <h3 className='text-lg md:text-xl mb-2 md:mb-3 font-semibold'>{title}</h3>
        <p className='flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm'>
          {stack.map(item =>(
            <span className='inline-block px-2 py-1 font-semibold border-2 border-[#0F4C81] rounded-md'>
              {item}
            </span>
          ))}
        </p>
        <p>{link}</p>
      </div>
    </div>
  )
};

export default PortfolioItems;