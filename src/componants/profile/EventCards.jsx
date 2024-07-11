import { Card, CardActions, CardContent, CardMedia, IconButton, Typography } from '@mui/material'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete';
export const EventCards = () => {
  return (
    <div>
        <Card sx={{width:345, bgcolor:'#f5f5f5'}} >
            <CardMedia 
            sx={{height:345}}
            image='https://images.pexels.com/photos/1633525/pexels-photo-1633525.jpeg?auto=compress&cs=tinysrgb&w=800'/>

            <CardContent >
                <Typography variant='h5'>
                    Indian Fast Food
                </Typography>
                <Typography variant='body2'>
                    50% off in your first order
                </Typography>
                <div className='py-2 space-y-2'>
                    <p>{"Kolkata"}</p>
                    <p className='text-sm text-blue-500'>July 11, 2024 12:00 A.M</p>
                    <p className='text-sm text-red-500'>July 20, 2024 11:59 P.M</p>
                </div>
            </CardContent>
          {false &&  <CardActions>
                <IconButton>
                    <DeleteIcon/>
                </IconButton>
            </CardActions>}
        
        </Card>
    </div>
  )
}
