import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        
        <Typography variant='h3' color='primary'>Login to Fb</Typography>
        <TextField label='email' variant='outlined'/>
        <TextField label='Password' variant='filled' type='password'/>
    </div>
  )
}

export default Login
