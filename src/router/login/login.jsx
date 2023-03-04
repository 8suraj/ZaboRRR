// import React, { useState } from 'react'
// import user from '../../resource/user.svg'
// import lock from '../../resource/formico/lock.svg'
// import email from '../../resource/formico/email.svg'
// import { Link } from "react-router-dom";
// import { Button } from '../../components/button'
// import validator from 'validator'
// import { useContext } from 'react';
// import { UserContext } from '../../components/context/user.context';
// // import { useNavigate } from "react-router-dom"
// const initialValue ={
//     email:"",
//     password:"",
// }
// export const Login = () => {
//     const [values, setValues] = useState(initialValue);
//     const [error, setError] = useState('');
//     const {setCurrentUser} =useContext(UserContext);
//     const onInputHandler =(e)=>{ 
//     const { name, value } = e.target;
//        if(validator.isEmpty(value))
//         {
//             setError()
//         } 

//         if(name==="email")
//         { 
//             if(validator.isEmail(value)){
//                 setValues({
//                     ...values,
//                     [name]: value,
//                     });
//             }else{
//                 //
//             }
//         }


//     }
//   return (
//     <div className='login'>
        
//         <div className='login__body'>
//             <div className='login__body--userIcon'>
//                 <img src={user} alt="" srcset="" />
//             </div>

//             <div className='login__body-1'>
//                 <div className='imgdiv'>
//                     <img src={email} alt="" />
//                     <input type='text' name="email" value={values.email} placeholder='Email' onChange={onInputHandler}/>
//                 </div>
//                 <div className='imgdiv'>
//                 <img src={lock} alt="" />
//                 <input type='password' name="password" value= {values.password}placeholder='Password' onChange={onInputHandler}/>
//                 </div>
//                 <span>something</span>
//                 <p>Don't Have a Account? <Link to='/createAccount'><span>SignUp</span></Link></p>

//                 <div className='btn-div' onClick={checkTextInput}>
//                     <Button item="LOGIN"/>
//                 {/* {currentUser&&console.log("from log",currentUser)} */}
//                 </div>
//             </div>
           
//         </div>
           
//     </div>
//   )
// }


import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
// import Formik from '../../components/formik/formik';
import ValidationSchema from '../../components/validation/validation';
import FormikForm from '../../components/formik/Index';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


export  function Login() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
        <FormikForm
      initialValues={{ firstName: "" }}
      validationSchema={ValidationSchema}
      enableReinitialize={true}
      setErrors
      onSubmit={() => {
        // alert("backend requesting...");
      }}
    >
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        
      </Container>
      </FormikForm>
  );
}
