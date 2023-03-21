import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Moviename = () => {
    var[MOVIES,setmovies]=useState({
        name:"",
        year:"",
        genre:"",
        rating:"",
        director:"",
        Producer:"",
        cast:""
    

    })
  
const handlechange = (e)=>{
    const {name,value}=e.target
    setmovies({...MOVIES,[Moviename]:value})
    console.log(MOVIES);
}
const savedata=()=>{
    console.log("Button clicked")
    axios.post("http://localhost:3005/MOVIES",MOVIES)
.then(response=>{
    alert("Succesfully added")
})
.catch(error=>{
    alert("failed")
})
}
  return (
    <div>
      <Typography variant='h4'>MOVIE NAME</Typography>
      <TextField label='ID' variant='outlined' name='id' value={MOVIES.id} onChange={handlechange}></TextField>/<br></br>
      <TextField label='NAME' variant='outlined' name='name'  onChange={handlechange}></TextField>/<br></br>
      <TextField label='year' variant='outlined' name='year'  onChange={handlechange}/><br></br>
      <TextField label='Genre' variant='outlined' name='genre'   onChange={handlechange}/><br></br>
      <TextField label='rating' variant='outlined' name='rating'   onChange={handlechange}/><br></br>
      <TextField label='director' variant='outlined' name='director'  onChange={handlechange}/><br></br>
      <TextField label='producer' variant='outlined' name='producer' onChange={handlechange}/><br></br>
      <TextField label='cast' variant='outlined' name='cast' onChange={handlechange}></TextField>/<br></br>
      <Button variant='outlined' color='success' onClick={savedata} type='submit'>Submit</Button>
    </div>
  )
}


export default Moviename
