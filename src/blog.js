import React from 'react'
import './blog.css';

const blog = () => {
  return (
    <>

      <div className='container-fluid'>
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
        </div>

        <div className='overlayBlog'>
          <div className='contentBlog'>
            <h1 className='text-danger'>Blogs</h1>
            <p className='text-light'>Your source for workout suggestions, healthy lifestyle tips, fitness advice, and more.</p>
          </div>
        </div>
      </div>



      <div className='container my-5 border rounded p-3'>
        <div className='row'>
          <div className='col-sm-6 ps-5' >
            <h3 className='mt-3 fs-2'>Challenge Yourself With This<br></br> Effective HIIT Workout</h3>
            <p className='fs-5'>Are you ready to kick your fitness routine up a notch? High-Intensity Interval Training (HIIT) might just be the game-changer you've been looking for. HIIT workouts are all the rage in the fitness world, and for good reason. They're efficient, effective, and can be adapted to suit any fitness level...</p>
          </div>

          <div className='col-sm-6'>
            <div className='image-container' id='imgBlog'>
              <img src='https://images.unsplash.com/photo-1552848031-326ec03fe2ec?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
            </div>
          </div>
        </div>
      </div>

      <div className='container my-3'>
        <div className='row'>
          <div className='col-sm-4'>
            <div className='card'>
              <img src='https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=1840&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
              <div className='card-title'>
                <h4 className='my-3'>Go, Go, Go, The Snap App, Two point oh!!!</h4>
                <p className='fs-5'>The snap app, a free fitness app for our members, has relaunched 
                  and is better...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <img src='https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
              <div className='card-title'>
                <h4 className='my-3'>6Ways you can be Eco-friendly in Gym</h4>
                <p className='fs-5'>In the spirit of earth day lets explore how you can make gym visits
                  more eco-friendly...</p>
              </div>
            </div>
          </div>

          <div className='col-sm-4'>
            <div className='card'>
              <img src='https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='' />
              <div className='card-title'>
                <h4 className='my-3'> Heart Tips: 9 Tips for the Healthier Heart</h4>
                <p className='fs-5'>In the spirit of earth day lets explore how you can make gym visits
                  more eco-friendly...</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Footer section */}
      <div className='container-fluid text-center pt-5 bg-dark text-light'>
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

export default blog