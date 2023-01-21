import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

function BackgroundCircles({}: Props) {
  return (
    <motion.div 
    initial = {{
        opacity: 0
    }}
    animate = {{
        scale: [1,2,2,3,1],
        opacity: [0.1,0.2,0.4,0.8,0.1,1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"]
    }}
    transition={{
        duration: 2.5
    }}
    
    className="relative flex justify-center items-center">
        <div className="absolute border border-gray-500 rounded-full opacity-20 h-[200px] w-[200px] animate-ping mt-52"/>
        <div className="absolute border border-gray-500 rounded-full opacity-20 h-[300px] w-[300px] mt-52"/>

        <div className="absolute border border-gray-500 rounded-full opacity-15 h-[500px] w-[500px] mt-52"/>

        <div className="absolute border border-gray-500 rounded-full opacity-10 h-[650px] w-[650px] mt-52 animate-pulse"/>

        <div className="absolute border border-gray-500 rounded-full opacity-5 h-[800px] w-[800px] mt-52"/>
    </motion.div>
  )
}

export default BackgroundCircles