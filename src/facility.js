import React from 'react'
import './facility.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faPeopleGroup } from '@fortawesome/free-solid-svg-icons';
import { faHandHolding } from '@fortawesome/free-solid-svg-icons';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';


const facility = () => {
  return (
    <>
      <div className='container-fluid text-light'>
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1434596922112-19c563067271?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Facility Background" />

          <div className='overlayFacility'>
            <div className='contentFacility'>
              <h1>Boost Your Mood</h1>
              <h1>With Snap <span>Fitness</span></h1>
            </div>
          </div>
        </div>
      </div>

      <div className='container text-center my-5'>
        <h2 className='text-danger my-2'>Our Fitness Approach</h2>
        <p>We're here to help you feel fantastic 24/7!</p>

        <div className='row'>
          <div className='col-sm-4 my-5 pe-5'>
            <FontAwesomeIcon icon={faBrain} size='2xl' style={{ color: "#d35056", }} />
            <h5 className='text-danger'> EXERCISE YOUR BODY AND MIND </h5>
            <p>We believe that exercise should be #ForTheFeeling. It’s scientifically proven that exercise can boost your mood, which will overall improve your life. Moving more can help reduce stress, anxiety, depression, boost self-esteem, and improve focus.</p>
          </div>

          <div className='col-sm-4 my-5 pe-5'>
            <FontAwesomeIcon icon={faHeart} size='2xl' style={{ color: "#d35056", }} />
            <h5 className='text-danger'> SUPPORTIVE ENVIRONMENT </h5>
            <p>From the moment you join we’ve got your back! We’ll help you set your personal, achievable goals, track your progress, and celebrate every win.</p>
          </div>

          <div className='col-sm-4 my-5 pe-5'>
            <FontAwesomeIcon icon={faPeopleGroup} size='2xl' style={{ color: "#d35056", }} />
            <h5 className='text-danger'> INCLUSIVE GYMS </h5>
            <p>No matter who you are or what type of movement you enjoy most, Snap Fitness is with you every step of the way. We believe that fitness has no boundaries, and we strive to make our clubs an inclusive place for everybody.</p>
          </div>
        </div>
      </div>


      <div className='container-fluid text-center bg-light py-5'>
        <h2 className='text-danger mt-4'>We're Here For You!</h2>
        <p className='mt-3'>We offer the most open, inclusive, empathetic, supportive fitness experience to every member at <br></br> every level. Whether you are an absolute beginner or workout regularly, our gyms are spaces that <br></br> you will feel comfortable in.</p>
      </div>


      {/* Amenity section */}
      <div className='container-fluid text-center text-light bg-danger mt-1 mb-2'>
        <h2 className='text-light my-3 py-2'>Amenities</h2>
        <p>Across our nearly 1,000 gyms worldwide, your gym amenities may include:</p>

        <div className='row'>
          <div className='col-sm-4 my-3 pe-5'>
            <FontAwesomeIcon icon={faHandHolding} size='2xl' style={{ color: "#eef1f6", }} />
            <h6 className='text-light my-3'> PROGRAMMING AND SERVICES </h6>
            <p>Personal Training</p>
            <p>Group Fitness Classes</p>
            <p>Myzone Heart Rate Monitor</p>
            <p>Snap App</p>
            <p>Nutrition Consulting</p>
            <p>On-Demand Fitness Classes</p>
          </div>

          <div className='col-sm-4 my-3 pe-5'>
            <FontAwesomeIcon icon={faDumbbell} size='2xl' style={{ color: "#eef1f6", }} />
            <h6 className='text-light my-3'> GYM EQUIPMENTS </h6>
            <p>Free Weights</p>
            <p>Strength Machines</p>
            <p>Squat Racks</p>
            <p>Treadmills</p>
            <p>Ellipticals</p>
            <p>Cable Machines</p>
          </div>

          <div className='col-sm-4 my-3 pe-5'>
            <FontAwesomeIcon icon={faPeopleGroup} size='2xl' style={{ color: "#eef1f6", }} />
            <h6 className='text-light my-3'> FEATURES </h6>
            <p>24/7 Gym Access</p>
            <p>Worldwide Gym Access</p>
            <p>Private Bathrooms</p>
            <p>Private Showers</p>
            <p>Tanning</p>
            <p>Vending Machines</p>
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

export default facility