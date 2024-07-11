import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import React, { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';


const categories=[
    "pizza",
    "Biryani",
    "Burger",
    "chicken",
    "Rice"
]
//this
const foodTypes=[
    {label:"All", value:"all"},
    {label:"vagetarian only", value:"vegetarian"},
    {label:"Non-Vegitarian", value:"Non-Vegitarian"},
    {label:"Seasonal", value:"Seasonal"}
]
const menu=[1,1,1,1,1

]
const RestaurantDetails = () => {
    // setting foodtype as all
    const[foodType,setfoodType]=useState("all");

    // will show if chick on the radio button
    const handleFilter=(e)=>{
        console.log(e.target.value, e.target.name)

    }
  return (
    <div className='px-5 lg:px-20'>
        <section>
            <h3 className='text-gray-300 py-2 mt-10'>Home/India/Indian fast food</h3>

            {/* this div is for restaurant photos */}
            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2016/09/21/22/59/restaurant-1685939_1280.jpg'/>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2016/11/18/22/21/restaurant-1837150_1280.jpg'/>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2015/05/31/11/23/table-791167_1280.jpg'/>
                    </Grid>

                    <Grid item xs={12} lg={4}>
                        <img className='w-full h-[40vh] object-cover' src='https://cdn.pixabay.com/photo/2015/09/14/11/43/restaurant-939435_1280.jpg'/>
                    </Grid>

                </Grid>
            </div>

            {/* this is the description of that restuarant  */}
            <div className='pt-3 pb-5'>
                <h1 className='text-slate-50 text-4xl font-semibold'>Indian Fast Food</h1>
                <p className='text-gray-500 mt-1'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam sint vel blanditiis nobis cum at dolorum debitis. Earum, illum, voluptate saepe officia assumenda similique, eos omnis molestiae voluptas sed ipsa!</p>
                <div className='space-y-3 mt-3'>
                <p className='text-gray-500 flex items-center gap-3'>
                    <LocationOnIcon/>
                    <span>
                        Kolkata,West Bengal
                    </span>
                </p>
                <p className='text-gray-500 flex items-center gap-3'>
                    <CalendarMonthIcon/>
                    <span>
                       Mom-Sun: 9:00 A.M - 9:00 P.M (Today)
                    </span>
                </p>
                </div>
            </div>
        </section>

        <Divider/>
        
        <section className='pt-[2rem] lg:flex relative text-gray-300'>
            <div className='space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    {/* this is for foodType*/ }
                    <div>
                        <Typography variant='h5'sx={{paddingBottom:"1rem"}}>
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType || "all"} >
                {foodTypes.map((item)=> (<FormControlLabel
                key={item.value}
                value={item.value} 
                control={<Radio sx={{color:'white'}}/>} 
                label={item.label}
                 />
                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    {/* This  is for foodCategory */}
                    <div>
                        <Typography variant='h5'sx={{paddingBottom:"1rem"}}>
                            Food Catefory
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType || "all"} >
                {categories.map((item)=> <FormControlLabel
                key={item}
                value={item} control={<Radio sx={{color:'white'}}/>} label={item} />)}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>
            <div className='space-y-5 lg:w-[80%] lg:pl-10'>
                
                {menu.map((item)=><MenuCard/>)}
                </div>

            
        </section>
    </div>
  )
}

export default RestaurantDetails