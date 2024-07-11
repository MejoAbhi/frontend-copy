import { Accordion, AccordionDetails, AccordionSummary, Button, FormControlLabel, FormGroup } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Checkbox from '@mui/material/Checkbox';
import React from 'react'
const ingredients=[
  {
    category: "Nuts & Seeds",
    ingredient: ["Cashew"]
  },
  {
    category:"Protein",
    ingredient:["Egg","Chicken"]
  }
]
const MenuCard = () => {

 const  handleCheckboxChange=(value)=>{
  console.log("value")
 }
  return (
    <Accordion style={{backgroundColor:'#1f2121'}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <div className='lg:flex items-center justify-between gap-x-5'>
            <div className='lg:flex items-center lg:gap-5'>
              <img className='w-[7rem] h-[7rem] object-cover' src='https://cdn.pixabay.com/photo/2015/08/27/05/11/western-909522_1280.jpg'/>
            </div>
            <div className='space-y-1 lg:space-y-3 lg:max-w-2xl'>
              <p className='font-semibold text-xl text-slate-50'>Chicken Roll</p>
              <p className='text-slate-50'>₹95</p>
              <p className='text-gray-400'> Kolkata Style Chicken Roll is a keeper. It will bombard you with flavors so subtle yet at the same time profoundly gripping</p>
            </div>
          </div>
        </AccordionSummary>
        <AccordionDetails className='text-slate-50'>
          <form>
            <div className='flex gap-5 flex-wrap'>

         {ingredients.map((item)=>
         <div>
          <p>{item.category}</p>
          <FormGroup>
            {item.ingredient.map((item)=> <FormControlLabel control={<Checkbox onChange={()=>handleCheckboxChange(item)}/>} 
            label={item} />)
            }

</FormGroup>
          </div>
         )}
            </div>
            {/* //if it is in stock then add to cart ot outof stock */}
            <div className='pt-5'>
              <Button variant="contained" disabled={false} type='submit'>{true?"Add to Cart":"Out of Stock"}</Button>
            </div>
          </form>
        </AccordionDetails>
      </Accordion>
  )
}

export default MenuCard