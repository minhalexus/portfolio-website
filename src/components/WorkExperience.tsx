import React from 'react'
import ExperienceCard from './ExperienceCard'

type Props = {}

function WorkExperience({}: Props) {
  return (
    <div className='h-screen flex flex-col md:flex-row justify-evenly mx-auto items-center
    relative max-w-full px-10'>
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
            Experience
        </h3>

        <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            <ExperienceCard />
            {/* ExperienceCard */}


        </div>
        
    </div>
  )
}

export default WorkExperience