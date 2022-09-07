import React from "react";
import Common from "./Common";
import img from '../src/proj3.jpg'
const About =()=>{
  return(
  <>
  <Common name="Welcome to About Page"
   visit='/contact'
   imgsrc={img}
    btname='Contact Now'/>
  </>
  );
}
export default About;