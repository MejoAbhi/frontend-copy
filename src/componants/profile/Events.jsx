import React from 'react'
import { EventCards } from './EventCards'

const Events = () => {
  return (
    <div className='mt-5 px-5 flex flex-wrap gap-5'>

        {[1,1,1,1].map((item)=><EventCards/>)}
    </div>
  )
}

export default Events