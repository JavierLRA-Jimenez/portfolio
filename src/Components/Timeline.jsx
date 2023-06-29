import React from 'react'
import TimeLinejs from '../data/TimeLinejs';
import TimelineItems from './TimelineItems';

function Timeline ()  {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center my-20'>
     
      <div className='w-full md:w-7/12'> 
        {TimeLinejs.map(item =>(
          <TimelineItems 
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
          />
        ))}
      </div>
    </div>
  )
}

export default Timeline;