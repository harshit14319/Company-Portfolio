import React from "react";
const Contact =()=>{
  return  (
    <>
     <div className='my-5'>
      <h1 className="text-center">Contact US</h1>
     </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
            <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">FullName</label>
  <input 
  type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your name"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input 
  type="email" class="form-control" id="exampleFormControlInput1" placeholder="mobile number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input 
  type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Example textarea</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div class='col-12'>
  <button class='btn btn-outline-primary' type="Submit">Submit</button>
</div>
            </form>
          </div>
        </div>
      </div>
    </>

  )
}
export default Contact;

