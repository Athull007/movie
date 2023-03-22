import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'



const Moviename = (props) => {
  var [movies, setmovies] = useState(props .data)
  console.log("add page props" + props.data)

  const handlechange = (e) => {
    const { name, value } = e.target
    setmovies({ ...movies, [name]: value })
    console.log(movies);
  }
  
  const savedata = () => {
    console.log("Button clicked")
    if (props.method === "post") {
      axios.post("http://localhost:3005/movies", movies)
        .then(response => {
          alert("Succesfully added")
        })
        .catch(error => {
          alert("failed")
        })

    }
    else if (props.method === "put") {
      axios.put("http://localhost:3005/movies" + movies.id, movies)
        .then(response => {
          alert("updated")
        })
        .catch(error => {
          alert("failed")
        })
    }
  }
  return (
    <div>
      <Typography variant='h4'>MOVIE NAME</Typography>
      <TextField label='moviename' variant='outlined' name='mid' value={movies.id} onChange={handlechange}></TextField>/<br></br>
      <TextField label='director' variant='outlined' name='director'  onChange={handlechange}></TextField>/<br></br>
      <TextField label='language' variant='outlined' name='language'  onChange={handlechange}/><br></br>
      <TextField label='Genre' variant='outlined' name='genre'   onChange={handlechange}/><br></br>
      <TextField label='releaseyear' variant='outlined' name='releaseyear'   onChange={handlechange}/><br></br>
      <Button variant='outlined' color='success' onClick={savedata} type='submit'>Submit</Button>
    </div>
  )
}


export default Moviename
