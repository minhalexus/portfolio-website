import { motion } from 'framer-motion'
import React from 'react'

type Props = {
    directionLeft?: boolean
}

function Skill({ directionLeft }: Props) {
  return (
    <div className="group relative flex cursor-pointer">
        <motion.img
            initial={{ 
                x: directionLeft ? -200: 200,
                opacity: 0
            }}
            transition = {{
                duration: 1
            }}
            animate = {{
                opacity: 1,
                x: 0
            }}
            src = "https://avatarfiles.alphacoders.com/305/305466.png"
            className="rounded-full border border-gray-500 object-cover
             w-16 h-16 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out"
        />
        <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white
         h-16 w-16 sm:w-24 sm:h-24 md:w-28 md:h-28 xl:w-32 xl-h-32 rounded-full z-0">
            <div className="flex items-center justify-center h-full">
                <p className="text-2xl font-bold text-black opacity-100">100%</p>
            </div>
        </div>
    </div>
  )
}

export default Skill