import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from './BackgroundCircles';

type Props = {}

function Hero({ }: Props) {
    const [text, count] = useTypewriter({
        words: [
            "Hi, I'm Minhal Shanjer",
            "Aspiring Entrepreneur",
            "University of Waterloo"
        ],
        loop: true,
        delaySpeed: 2000
    });
    return (
        <div className="h-screen flex flex-col space-y-8 items-center justify-center
                        text-center overflow-hidden">
            <BackgroundCircles />
            <img
                className='relative rounded-full h-32 w-32 mx-auto object-cover'
                src="https://avatarfiles.alphacoders.com/305/305466.png"
            />

            <div className="z-20">
                <h2 className="text-sm uppercase text-gray-300 pb-2 tracking-[1rem]">Software Developer</h2>

                <h1 className="text-2xl lg:text-6xl font-semibold px-10">
                    <span>{text}</span>
                    <Cursor cursorColor='white' />
                </h1>


                <div className='pt-5'>
                    <Link href="#about">
                        <button className="heroButton">About</button>
                    </Link>
                    <Link href="#Skills">
                        <button className="heroButton">Skills</button>
                    </Link>
                    <Link href="#Experience">
                        <button className="heroButton">Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className="heroButton">Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Hero