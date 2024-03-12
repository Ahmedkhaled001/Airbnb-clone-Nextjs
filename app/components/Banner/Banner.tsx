import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <div className=' relative h-[300px] sm:h-[400px] lg:h-[400px] xl:h-[500px]'>
        <Image src="https://www.hotellinksolutions.com/images/blog/featured1.jpeg" alt='banner-img' fill
        className='object-cover object-left'/>
        <div className=' absolute top-1/2 w-full text-center flex flex-col items-center justify-center gap-[30px]'>
            <p className=' text-md sm:text-lg mb-2 font-semibold bg-[#cfcfcfab] w-[360px] h-[38px] rounded-md'>Not sure where you need to go? perfect.</p>
            <button type='button' className=' text-rose-400 bg-white px-10 py-4 rounded-full font-bold shadow-md hover:bg-slate-100 hover:text-rose-500'>I am a flexible</button>
        </div>
    </div>

  )
}
export default Banner

