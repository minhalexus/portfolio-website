import { motion } from 'framer-motion'
import React from 'react'
import BackgroundCircles from './BackgroundCircles'

type Props = {}

function About({}: Props) {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView= {{opacity: 1}}
    transition= {{ duration: 1.5 }}
    className='h-screen flex flex-col md:flex-row justify-evenly mx-auto items-center
     relative text-center md:text-left max-w-7xl px-10'>
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">About</h3>
    
        <motion.img
            initial={{
                x: -200,
                opacity: 0
            }}
            transition= {{
                duration: 1
            }}
            whileInView={{
                x: 0,
                opacity: 1
            }}
            viewport = {{
                once: true
            }}
            src="https://avatarfiles.alphacoders.com/305/305466.png"
            className="-mb-20 md:mb-0 mr-5 md:mr-2 flex-shrink-0 w-36 h-36 rounded-full 
            object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[400px] xl:h-[500px]"
        />

        <div className="space-y-0 px-0 md:px-10">
            <h4 className="text-2xl font-semibold mb-5">
                Here is a <span className='underline decoration-yellow-200'>little</span>{" "}
                background.
            </h4>
            <p className="text-sm text-justify">
               Lorem  vel elit fringilla, ultricies quam et, sodales libero. Donec congue neque non sem ultricies, ut aliquet mauris pulvinar. Nullam blandit sapien vitae rutrum rhoncus. Sed nec ante a massa ultricies scelerisque id vitae sem. Curabitur bibendum semper ex, consectetur viverra dolor lobortis vel. Maecenas aliquam, sem id viverra bibendum, dolor ligula congue nulla, eget dapibus velit odio sed leo. Integer molestie sem leo, a cursus nisl venenatis et. Suspendisse erat enim, commodo quis quam non, mollis pharetra enim. Donec facilisis risus vel nulla eleifend, nec euismod enim aliquam. Pellentesque et sem tempus. 
            </p>
        </div>
    
    </motion.div>
    
  )
}

export default About