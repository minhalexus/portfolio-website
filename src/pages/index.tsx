import About from '@/components/About'
import ContactMe from '@/components/ContactMe'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import WorkExperience from '@/components/WorkExperience'
import Head from 'next/head';
import Link from 'next/link';
import { ArrowUpIcon } from '@heroicons/react/24/solid';


export default function Home() {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y 
    snap-proximity overflow-y-scroll overflow-x-hidden z-0 
    scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-green-500/80">
      <Head>
        <title>Minhal Shanjer</title>
      </Head>

      

      {/* Hero */}
      <section id="hero" className='snap-start'>
        <Header />
        <Hero />
      </section>

      {/* About */}
      <section id="about" className="snap-center">
        <About />
      </section>

      {/* Experience */}
      <section id="experience" className="snap-start">
        <WorkExperience />      
      </section>

      {/* Skills */}
      <section id="skills" className="snap-start">
        <Skills />
      </section>

      {/* Projects */}
      <section id="projects" className="snap-start">
        <Projects />
      </section>

      {/* Contact Me */}
      <section id="contact-me" className="snap-start">
        <ContactMe />
      </section>
      
      <Link href="#hero">
        <footer className="sticky bottom-5 right-5 w-full cursor-pointer">
          <div className="flex items-center justify-end mr-5">
            <ArrowUpIcon className="h-8 w-8 rounded-full bg-green-500"/>
          </div>
        </footer>
      </Link>
    </div>
  )
}
