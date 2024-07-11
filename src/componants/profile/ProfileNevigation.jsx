import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import FavoriteIcon from '@mui/icons-material/Favorite';
//import HomeIcon from '@mui/icons-material/Home';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import EventIcon from '@mui/icons-material/Event';
import LogoutIcon from '@mui/icons-material/Logout';
import { AddReaction } from '@mui/icons-material';
import { Divider, Drawer, useMediaQuery } from '@mui/material';
import zIndex from '@mui/material/styles/zIndex';
import {useNav, useNavigate} from 'react-router-dom'

const menu=[
    {title: "Orders", icon:<ShoppingBagIcon/>},
    {title: "Favorites", icon:<FavoriteIcon/>},
    {title: "Address", icon:<AddReaction/>},
    {title: "Payments", icon:<AccountBalanceWalletIcon/>},
    {title: "Notificattion", icon:<NotificationsActiveIcon/>},
    {title: "Events", icon:<EventIcon/>},
    {title: "Logout", icon:<LogoutIcon/>}
]
export const ProfileNevigation = ({open,handleClose}) => {
    const isSmallScreen=useMediaQuery('(max-width:900px)')
     const navigate=useNavigate();
    const handleNavigate=(item)=>{
        navigate(`/my-profile/${item.title}`)
    }
    
  return (
    <div>
        {/* we want show this in left thats why anchor is left */}
        <Drawer onClose={handleClose} 
        variant={isSmallScreen?"temporary" :"permanent"} 
        open={isSmallScreen?open :true} 
        anchor='left' 
        sx={{zIndex : -1, position:"sticky"}}>



            <div className='w-[20vw] lg:w[10vw] h-[100vh] flex flex-col justify-center text-xl gap-8 pt-16  text-slate-50'  style={{backgroundColor:'black'}}>
                {menu.map((item,i)=><>

                <div onClick={()=>handleNavigate(item)} className='px-5 flex items-center scpace-x-5 cursor-pointer'>
                    {item.icon}
                    <span>{item.title}</span>
                </div>
                {/* our item is last then no need to show the divider like logout is last then no need to show */}
                {i!== menu.length-1 &&<Divider sx={{bgcolor:"#f5f5f5"}}/>}
                </>
                
                )}
            </div>
        </Drawer>
    </div>
  )
}
