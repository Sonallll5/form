import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sampleform = () => {
    var[input,setInput]= useState();
    var[input2,setInput2]=useState();

    const inputHandle=(Event)=>{
        setInput(Event.target.value)
        console.log(input)
    }
    const inputHandle2=(e)=>{
        setInput2(e.target.value)
    }
  return (
    <div>
        <Typography>{input}</Typography>

      <TextField variant='outlined' label='First Name' onChange={inputHandle}/>
      <br/><br />
      <Typography>{input2}</Typography>
      <TextField variant='outlined' label='password' onChange={inputHandle2}/>
      <br/><br />
      <Button variant='contained'>SUBMIT</Button>
    </div>
  )
}

export default Sampleform
