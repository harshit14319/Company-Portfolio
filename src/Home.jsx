import React from "react";
import Common from "./Common";
import img1 from '../src/proj2.jpg'
import { NavLink } from "react-router-dom";
const Home =()=>{
  return <>
  <Common
  name="Grow your business with "
  imgsrc={img1}
  visit='/service' 
   btname='Getting Started'/>
  </>
}
export default Home;