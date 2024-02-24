import React from 'react'

import LiveItems from './LiveItems'
import { getLive } from '@/app/utils/api'
import { LiveData } from '@/app/types/app'

const Live = async () => {
    const getLiveData : LiveData = await getLive()

      const allLiveData = getLiveData.map( (item) => (
        <LiveItems key={item.img} img={item.img} title={item.title} />
    ))

  return (
    <section>
        <div className='container mt-7'>
            <h2 className=" font-semibold text-4xl mb-5">Live Anywhere</h2>
            <div className='p-4 flex space-x-48 overflow-x-scroll sb-scrollbar' >
                {allLiveData}
            </div>
        </div>
    </section>
  )
}


export default Live