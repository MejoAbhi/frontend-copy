import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton,Box } from '@mui/material';
import { green } from '@mui/material/colors';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './Navbar.css';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
export const Navbar = () => {

    const navigate=useNavigate();

  return (
    <Box sx={{zIndex:1}}className='px-5 sticky top-0 z-50 py-[.8rem] bg-[#81c784] lg:px-20 flex justify-between'>
       
            <div className='lg:mr-10 cursor-pointer flex item-center space-x-4'>
                <li className='logo font-semibold text-slate-50 text=2xl'>
                    Abhi's Food
                </li>
            </div>

        
        <div className='flex items-center space-x-2 lg:space-x-10'>
            <div>
                <IconButton>
                    <SearchIcon sx={{color:'white',fontSize:"1.5rem"}}/>
                </IconButton>
            </div>
            {/* for avatar icon  if false it will not show just avater and after clicking it will take to the login panal*/}
        <div className=''>
            
           {false? <Avatar sx={{bgcolor:"white", color: green.A700}}>c</Avatar>:
           <IconButton onClick={()=>navigate("/account/login")}>
            <Person/>
           </IconButton>
           }
        </div>

        <div className=''>
                <IconButton>
                    <Badge color='primary' badgeContent={3}>

                   <ShoppingCartIcon  sx={{color:'white',fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            
        </div>
        </div>
        </Box>
        

       
    
  )
}
