import { motion } from 'framer-motion';
import React from 'react'

type Props = {}

function Projects({}: Props) {

    const projects = [1,2,3,4,5];

  return (
    <motion.div 
        initial={{ opacity:0 }}
        transition={{
            duration: 1.2
        }}
        whileInView= {{
            opacity: 1
        }}
        className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
        <h3 className="absolute top-24 text-2xl uppercase tracking-[20px] text-gray-500">
            Projects
        </h3>

        <div className="relative w-full flex overflow-x-scroll overflow-y-hidden 
        snap-x snap-mandatory z-20
        scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80">
            {projects.map((project, index) => {
                return (
                    <div className="w-screen flex-shrink-0 snap-end flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen">
                        <motion.img 
                        initial={{
                            y: -300,
                            opacity: 0
                        }}
                        transition = {{ duration: 1.2 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="h-36 w-36" 
                        src="https://avatarfiles.alphacoders.com/305/305466.png"/>
                        <div>
                            <h4>Projects {index} of {projects.length}: LeavingShortly</h4>    
                        </div>

                        <p>
                        Lorem  vel elit fringilla, ultricies quam et, sodales libero. 
                        Donec congue neque non sem ultricies, ut aliquet mauris 
                        pulvinar. Nullam blandit sapien vitae rutrum rhoncus. Sed nec 
                        ante a massa ultricies scelerisque id vitae sem. Curabitur
                            bibendum semper ex, consectetur viverra dolor lobortis vel.
                        </p>
                    </div>
                )
            })}
        </div>

        <div className="w-full absolute top-[30%] bg-[#F7Ab0A]/10 left-0 h-[400px] -skew-y-12" />
    </motion.div>
  )
}

export default Projects 