import { Box, Button, Card, Divider, Grid, Modal, TextField } from '@mui/material'
import React from 'react'
import { CartItem } from './CartItem'
import { AddressCard } from './AddressCard'
import AddLocationAltIcon from '@mui/icons-material/AddLocationAlt';
import { ErrorMessage, Field, Form, Formik } from 'formik';
//import * as Yup from "yup";
//this setting is for modal
 export const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    outline:'none',
    boxShadow: 24,
    p: 4,
  };
  const initialValues={
    streetAddress:"",
    state:"",
    pincode:"",
    city:""
  }
//   const validationSchema=Yup.object.shape({
//    streetAddress:Yup.string().required("Street Address is requires"),
//    state:Yup.string().required("state is requires"),
//    pincode:Yup.number.required("pincode is requires"),
//    city:Yup.string().required("city is requires")
//   })
  


const items=[1,1]

const Cart = () => {
    const createOrderUsingSelectedAddress=()=>{
        
    }
    const handleOpenAddressModel=()=>setOpen(true);
    const [open, setOpen] = React.useState(false);
    //const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const handleSubmit=(value)=>{
        console.log("modal form value",value)
    }
  return (
    <div>
        <main className='lg:flex justufy-between'>
            <section className='lg:w-[30%] space-y-6 lg:min-h-screen pt-10'>
           {items.map((item)=>(
            <CartItem/>
            ))} 
            {/* bill details */}
            <Divider sx={{ bgcolor: "#f5f5f5" }}/>
            <div className='billDetails px-5 text-sm text-slate-50'>
                <p className='font-extralight py-5'>Bill details</p>
                <div className='space-y-3'>
                    <div className='flex justify-between text-gray-400'>
                        <p>Item Total</p>
                        <p>$600</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>Delivary fee</p>
                        <p>$10</p>
                    </div>
                    <div className='flex justify-between text-gray-400'>
                        <p>GST and Restaurant Charges</p>
                        <p>$20</p>
                    </div>
                    <Divider sx={{ bgcolor: "#f5f5f5" }}/>

                </div>
                <div className='flex justify-between text-gray-400'>
                <p>Total Pay</p>
                <p>$630</p>
                </div>
            </div>
            </section>
            <Divider sx={{ bgcolor: "#f5f5f5" }} orientation='vertical' flexItem/>
            <section className='lg:w-[70%] flex justify-center px-5 pb-10 lg:pb-0'>
                <div>
                    <h1 className='text-center font-semibold text-2xl py-10'>Choose Delivary Address</h1>
                    <div className='flex gap-5 flex-wrap justify-center'>
                        {[1,1,1,1].map((item)=>
                        <AddressCard handleSelectAddress={createOrderUsingSelectedAddress} 
                        item={item} showButton={true}/>
                    )}


                    {/* this is for adding new address /////////////////////////////////////////////////////////*/}

                    <Card className='flex gap-5 w-64 p-5' style={{backgroundColor: "#212121"}}>
        <AddLocationAltIcon sx={{color:'white'}}/>
        <div className='space-y-3 text-gray-400'>
            <h1 className='font-semibold text-lg text-white'>Add New Adderess</h1>
          
            <Button variant='outlined' fullWidth onClick={handleOpenAddressModel}>Add</Button>
        </div>
    </Card>

                    </div>
                </div>
            </section>
        </main>
{/* ///////// THIS WLL HAPPEN WHILE ADD NEW ADDRESS CLICKED//////////// */}
<Modal
  open={open}
  onClose={handleClose}
  aria-labelledby="modal-modal-title"
  aria-describedby="modal-modal-description"
>
  <Box sx={style}>
   <Formik initialValues={initialValues} onSubmit={handleSubmit}>
    <Form>

                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="streetAddress"
                            label="Street Address"
                            fullWidth
                            variant="outlined"
                            error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >
                                    <h1>Hi</h1>
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="state"
                            label="State"
                            fullWidth
                            variant="outlined"
                            //error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >
                                    <h1>Hi</h1>
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="city"
                            label="city"
                            fullWidth
                            variant="outlined"
                            //error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >
                                    <h1>Hi</h1>
                            </Field>
                        </Grid>
                        <Grid item xs={12}>
                            <Field as={TextField}
                            name="pincode"
                            label="pincode"
                            fullWidth
                            variant="outlined"
                            //error={!ErrorMessage("streetAddress")}
                            // helperText={
                            //     <ErrorMessage>
                            //         {(msg)=><span className='text-red-600'>{msg}</span>}
                            //     </ErrorMessage>
                            // }
                            >
                                    <h1>Hi</h1>
                            </Field>
                        </Grid>
                        <Grid ityem xs={12}>
                            <Button fullWidth variant='contained' type='submit' color='primary'>
                                Deliver Here
                            </Button>

                        </Grid>
                    </Grid>
    </Form>
   </Formik>
  </Box>
</Modal>
    </div>
  )
}

export default Cart