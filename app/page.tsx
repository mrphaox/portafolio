import Image from 'next/image'
import Banner from '@/components/Banner'
import Aboutme from '@/components/Aboutme'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Education from '@/components/Education'
import Projects from '@/components/Projects'
export default function Home() {
  return (
    <main className='w-full bg-sky-950 items-center text-gray-300 px-4'>
      <div className='max-w-screen mx-auto lg:pt-10'>
        <Banner/>
        <Aboutme/>
        <Experience/>
        <Education/>
        <Projects/>
        <Skills/>
        <Contact/>
        <Footer/>
        </div>
  </main>
  )
}
