import { Button, TextField, Typography } from '@mui/material'
import React from 'react'

const Signup = () => {
  return (
    <div>
      <Typography variant='h4' color='primary'>Signup</Typography>
      <br></br>
      <TextField label='Username' variant='outlined'/>
      <br></br>
      <TextField label='Ph.No' variant='outlined'/>
      <br></br>
      <TextField label='Email' variant='outlined'/>
      <br></br>
      <TextField type="password" label='Password' variant='outlined'/>
      <br></br>
      <Button variant='contained'>SUMBMIT</Button>
        
   </div>
  )
}

export default Signup
