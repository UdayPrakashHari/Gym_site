import React from 'react'
import './contact.css';

const Contact = () => {
  return (
    <>
    <div className='container-fluid'>
      <div className='image-container'>
        <img src='https://images.unsplash.com/photo-1606335544665-96055053b5c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='contactBG'/>
      </div>

      <div className='overlayContact'>
        <div className='contentContact'>
          <h1 className='text-light' id='contactHead'> How Can We Help <br></br>You? </h1>
        </div>
      </div>
    </div>
    

    <div className='container text-center mt-5'>
      <h3 className='mb-4'>Questions About Your Membership?</h3>
      <p className='mb-4'>Contact your gym for all billing and membership inquiries. For more information, visit our member <br></br> FAQs.</p>
      <button className='btn btn-warning me-4 mb-5'>Find Your Gym</button>
      <button className='btn btn-warning mb-5'>Member FAQs</button>
    </div>


    <div className='container-fluid my-2 bg-warning'>
      <div className='row'>

        <div className='col-md-6' id='textContact'>
          <h3>Contact Us</h3>
          <p>Do you have a specific inquiry? Contact these email addresses below.<br></br> Please add  your city, state and postal code within your message.</p><br></br>

          <p>Media <br></br>media@snapfitness.com</p><br></br>

          <p>Vendors & Wholesale <br></br>vendorsupport@liftbrands.com </p><br></br>

          <p>Group Membership Sales <br></br>groupmemberships@bodyboostfitness.com</p><br></br>

          <p>General Inquiries <br></br>inquiries@bodyboostfitness.com</p><br></br>

          <p>For membership inquiries please contact your local gym.</p>
        </div>

        <div className='col-md-6'>
          <div className='image-container' id='imgContact'>
            <img src='https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt=''/>
          </div>
        </div>
      </div>
    </div>


          {/* Footer section */}
          <div className='container-fluid text-center mt-2 pt-5 bg-dark text-light'>
        <div className='row'>

          <div className='col-sm-2' ></div>
          <div className='col-md-2'>
            <h5>Find a club</h5>
            <p>About Us</p>
            <p>Membership</p>
            <p>Locate Us</p>
          </div>

          <div className='col-md-2'>
            <h5>Blogs</h5>
            <p>Careers</p>
            <p>Location</p>
            <p>Terms & Conditions</p>
          </div>

          <div className='col-md-2'>
            <h5>About Club</h5>
            <p>About Us</p>
            <p>Membership</p>
            <p>Locate Us</p>
          </div>

          <div className='col-md-2 '>
            <h5>Careers</h5>
            <p>Careers</p>
            <p>Location</p>
            <p>Terms & Conditions</p>
          </div>

          <div className='col-sm-2'></div>

        </div> <br></br> <hr></hr>

        <div className='row'>
          <div className='col-md-12 text-center'>
            <p>Copyright © 2020 - 2024 BodyBoost Fitness.</p>
          </div>

          
        </div>
      </div>
    </>
  )
}

export default Contact