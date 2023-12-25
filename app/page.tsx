import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    
   <main className='w-screen h-screen relative'>
    <div className='flex items-center w-full h-full bg-cover bg-center' style={{backgroundImage:"url(/home.jpg)"}}>
<div className='pl-20 md:pl-40 pb-56 md:pb-20 flex flex-col gap -56 z-[10] max-w-[750px]'>
  <h1 className='text-3xl md:text-5xl  text-white font-semibold '>
    Proqramları   <span className='text-transparent bg-clip-text bg-gradient-to-r from bg-blue-100 to-cyan-500'>
       Peşəkarlardan öyrənin!
    </span>

  </h1>
  <p className='text-gray-200 hidden md:block'> 
    Peşəkar inkişaf etmək, bacarıq əldə etmək və ya yeni karyera seçmək istəyənlər üçün ES_professional kompüter kursları dəyərli məlumat mənbəyi ola bilər.</p>
<div className='flex-col md:flex-row hidden md:flex gap-5 py-7'>
<Link href= "/my-skills" className = 'rounded -[20px] group relative bg-cyan-900  border  border-white px-5 py-3 text-lg text-white max-w-[300px]'>
Daha ətraflı
</Link>
<Link href= "/my-projects" className = 'rounded -[20px] group relative bg-transparent border  border-white px-5 py-3 text-lg text-white max-w-[300px]'>
  <div className='absolute rounded-[20px] z-1 bg-white inset-0 opacity-0 group-hover:opacity-20'/> 
  Tədris olunan proqramlar
</Link>
<Link href= "/contact-me" className = 'rounded -[20px] group relative bg-transparent border  border-white px-5 py-3 text-lg text-white max-w-[300px]'>
  <div className='absolute rounded-[20px] z-1 bg-white inset-0 opacity-0 group-hover:opacity-20'/> 
  Əlaqə
</Link>


</div>
   </div>
   </div>
   
   <div className="absolute  flex bottom-10 z-[20] right-5 flex-col  md:hidden gap-5 ">
<Link href= "/my-skills" className = 'rounded -[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>
  Learn more
</Link>
<Link href= "/my-projects" className = 'rounded -[20px] group bg-transparent border border-white px-5 py-3 text-lg text-white max-w-[200px]'>

  My Projects
</Link>
<Link href= "/Contact-me" className = 'rounded -[20px] group bg-blue - 500 bg-transparentborder border-white px-5 py-3 text-lg text-white max-w-[200px]'>
 
  Contact me
</Link>
</div>



   </main>
  )
}
