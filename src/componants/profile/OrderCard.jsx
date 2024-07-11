import { Button, Card } from '@mui/material'
import React from 'react'

export const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5' sx={{bgcolor:'#f5f5f5'}} >
        <div className='flex items-center space-x-5'>
            <img className='h-15 w-16' src='https://cdn.pixabay.com/photo/2023/10/19/11/18/biryani-8326234_1280.jpg'/>
        <div className='text-slate-50'>
            <p>Biryani</p>
            <p>$250</p>
        </div>
        </div>
        <div>
            <Button desabled className='cursor-not-allowed'>Completed</Button>
        </div>

    </Card>
  )
}
