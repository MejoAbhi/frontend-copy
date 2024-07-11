import { Button, Card } from '@mui/material'
import React from 'react'
import HomeIcon from '@mui/icons-material/Home';


export const AddressCard = ({item,showButton,handleSelectAddress}) => {

   
  return (
    <Card className='flex gap-5 w-64 p-5' style={{backgroundColor: "#212121"}}>
        <HomeIcon sx={{color:'white'}}/>
        <div className='space-y-3 text-gray-400'>
            <h1 className='font-semibold text-lg text-white'>Home</h1>
            <p>
                349,Dum Dum Park, Flat-3,Kolkata-700055,West Bengal,India
            </p>
            {showButton && (<Button variant='outlined' fullWidth onClick={()=>handleSelectAddress(item)}>Select</Button>)}
        </div>
    </Card>
  )
}
