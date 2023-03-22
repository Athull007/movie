import { Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React, {useState,useEffect} from 'react'
import axios from 'axios'
import Moviename from './Moviename'

const Exam = () => {
    var [update, setupdate] = useState(false)
  var [singlevalue, setsinglevalue] = useState([])
  var [movies, setmovies] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3005/movies")
      .then(response=> {
        console.log(response.data)
        setmovies(movies = response.data)
      })
      .catch(err => console.log(err))
  
    },[])
  const updatevalue = (value) => {
    setsinglevalue(value);
    setupdate(true);
  }

  const deletemovies = (id) => {
    console.log("delete clicked" + id);
    axios.delete("http://localhost:3005/movies/" + id)
      .then(response => {
        alert("deleted")
        window.location.reload(false)
      })
  }
  var finaljsx = <TableContainer>
    <Table>
      <TableHead>
        <TableRow>
          <TableCell>moviename</TableCell>
          <TableCell>director</TableCell>
          <TableCell>language</TableCell>
          <TableCell>genre</TableCell>
          <TableCell>releaseyear</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {movies.map((value, index) => {
          return <TableRow>
            <TableCell>{value.moviename}</TableCell>
            <TableCell>{value.director}</TableCell>
            <TableCell>{value.language}</TableCell>
            <TableCell>{value.genre}</TableCell>
            <TableCell>{value.releaseyear}</TableCell>
            <TableCell>
              <Button variant='outlined' onClick={() => deletemovies(value.id)}> delete </Button>
            </TableCell>
            <TableCell>
              <Button variant='contained' onClick={() => updatevalue(value)}>update</Button>
            </TableCell>
          </TableRow>
        })}
      </TableBody>
    </Table>
  </TableContainer>
  if (update)
    finaljsx = <Moviename data={singlevalue} method='put' />
  return (
    <div>
      <Typography variant='h5'>Welcome to movies/Typography/</Typography>
      {finaljsx}
    </div>
  )
}

export default Exam
