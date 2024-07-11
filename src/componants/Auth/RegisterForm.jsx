import { Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'



const initialValues={
    fullName:"",
    email:"",
    password:"",
    role:"ROLE_CUSTOMER"
}

export const RegisterForm = () => {

    const handleSubmit=(values)=>{
        console.log("form values",values);

    }

    const navigate=useNavigate();

  return (
    <div>
    <Typography variant='h5' className='text-center'>
        Sign Up
    </Typography>
    <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
        <Field 
                        as={TextField}
                        name="fullName"
                        label="fullName"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        />
        <Field 
                        as={TextField}
                        name="email"
                        label="email"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        />
                        <Field 
                        as={TextField}
                        name="password"
                        label="password"
                        fullWidth
                        variant="outlined"
                        margin="normal"
                        type="password"
                        />

{/* this section is for role */}


  <Field
  as={Select}
  fullWidth
    labelId="role-simple-select-label"
    id="demo-simple-select"
    //value={age}
    //label="Role"
    name="role"
    //onChange={handleChange}
  >
    <MenuItem value={"ROLE_CUSTOMER"}>Customer</MenuItem>
    <MenuItem value={"ROLE_RESTAURANT_OWNER"}>Restaurant Owner</MenuItem>
    
  </Field>

                  <Button sx={{mt:2, padding:'1rem'}}fullWidth type='submit' variant='contained'>Sign Up</Button>              
                        
        </Form>
    </Formik>
    {/* Other function like if you dont have an Account */}
    <Typography variant='body2' align='center' sx={{mt:3}}> 
        If have an account already?
        <Button size='small' onClick={()=>navigate("/account/login")}>
            LOGIN
        </Button>
    </Typography>

</div>
  )
}
