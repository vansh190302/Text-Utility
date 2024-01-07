import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import About from './components/About';
import Alert from './components/Alert';
import React, { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message, type)=>{
    setalert({
      msg:message,
      type:type
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }
  const togglemode =()=>{
    if (mode === 'light') {
      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("Dark mode has been Enabled", "success");
    }else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("Light mode has been Enabled", "success");
    }
  }
  return (
    <>
    <Router>
    {/* <Navbar/> */}
    <Navbar title = "TextUtils" abouttext = "About TextUtils" mode={mode} togglemode={togglemode} />
    <Alert alert = {alert} />
    <div className="container my-3">
    <Routes>
          <Route exact path="/about" element={<About/>}>
          </Route>
          <Route exact path="/" element={<Form showalert={showalert} heading = "Enter your Text to play with" mode = {mode}/>}>
          </Route>
        </Routes>
      </div>
      </Router>
    </>
  );
}
export default App;
