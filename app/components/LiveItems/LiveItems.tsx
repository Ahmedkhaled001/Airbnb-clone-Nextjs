import { LiveItem } from '@/app/types/app';
import Image from 'next/image';
import React from 'react'

type LiveItemsProps = LiveItem;
const LiveItems = ({img , title} : LiveItemsProps) => {
  return (
    <div className=' hover:bg-gray-200 p-1 hover:scale-105 transition transform duration-200 ease-out'>
        <div className=' relative h-72 w-72 cursor-pointer'>
            <Image src={img} alt='img' fill className=' rounded-md'/>
        </div>
        <h3>{title}</h3>
    </div>
  )
}

export default LiveItems