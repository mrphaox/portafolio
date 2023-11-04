import Image from 'next/image'
import Banner from '@/components/Banner'
import Aboutme from '@/components/Aboutme'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
export default function Home() {
  return (
    <main className='w-full bg-gray-950 items-center text-gray-300 px-4'>
      <div className='max-w-screen mx-auto lg:pt-10'>
        <Banner/>
        <Aboutme/>
        <Experience/>
        <Skills/>
        </div>
  </main>
  )
}
