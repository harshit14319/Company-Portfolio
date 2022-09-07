import React from "react";
import Home from './Home';
import About from './About';
import Service from "./Service";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Footer from "./Footer";
import './index.css';
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const App =()=>{
  return (
    <>
<Router>
<Navbar/>
<Routes>
    <Route path='/' element ={<Home/>}/>
    <Route exact path='/about' element ={<About/>}/>
    <Route exact path='/service' element ={<Service/>}/>
    <Route exact path='/contact' element ={<Contact/>}/> 
</Routes>
</Router>
<Footer/>
</>
  );
};
export default App;
