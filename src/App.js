import logo from './logo.svg';
import './App.css';
import Moviename from './Components/Moviename';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Exam from './Components/Exam';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div className="App">
     <Moviename></Moviename>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/Exam" element={<Exam></Exam>}></Route>
          <Route path="/MOVIES" element={<Exam></Exam>}></Route>
          <Route path="Moviename" element={<moviename
          data= {{ id: "", director: "", language: "",genre:"",releaseyear:"" }} method="post"/>}></Route>
          </Routes>
      </BrowserRouter> 
    </div>
  );
}

export default App;
