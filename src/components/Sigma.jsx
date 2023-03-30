import { TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Sigma = () => {
    var[input,setInput]=useState({
        value1:'',
        value2:'',
        value3:''
    })
    const vikram = (e) => {
        const {name,value} = e.target
        setInput({...input,[name]:value})
    }
  return (
    <div>

        <Typography>{input.value1} </Typography>
        <TextField label='first name' name='value1' value={input.value1}
        onChange={vikram}/>
        <br></br>
        <Typography>{input.value2} </Typography>
        <TextField label='last name' name='value2' value={input.value2}
        onChange={vikram}/>
        <Typography>{input.value3} </Typography>
        <TextField label='College name' name='value3' value={input.value3}
        onChange={vikram}/>
        
       </div> 
        
  )
}

export default Sigma
