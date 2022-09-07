 import React from 'react'
 import app from '../src/app.jpg'
 import web from '../src/web.jpg'
 import un from '../src/un.jpg'
 import ml from '../src/ml.jpg';
 import digi from '../src/digi.jpg'
 import ds from '../src/ds.jpg';
 const Card = (props) => {
   return (
<>

        <div className="col-md-4 col-10 mx-auto">
        <div className="card">
  <img src={props.imgsrc} className="card-img-top" alt='gf'/>
  <div className="card-body">
    <h5 className="card-title font-weight-bold">{props.title}</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
        </div>

</>   )
 }
 
 export default Card