import React from 'react'
import './about.css';

const About = () => {
  return (
    <>
      <div className='container-fluid'>
        <div className='image-container'>
          <img src='https://images.unsplash.com/photo-1517838277536-f5f99be501cd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D ' alt='About Background' />
        </div>

        <div className='overlayAbout'>
          <div className='contentAbout'>
            <h1>About BodyBoost Fitness</h1>
            <p>Whether you’re a first-time gym user or a veteran member, we’re here to provide a <br></br> workout environment in which anyone - and everyone - can be comfortable.</p>
          </div>
        </div>
      </div>


      <div className='container   mt-5' id='aboutText'>
        <p>No matter what you’re looking for in a gym, we’ve got a membership option made for you. All Planet Fitness members enjoy unlimited access to their home club and <br></br> the  support of our friendly, knowledgeable staff anytime you need it. PF Black Card® members receive additional benefits, including the ability to bring a guest for free <br></br> and  access to any of our 2,500+ PF locations.</p>

        <p>Looking for a little extra guidance or inspiration to help you meet your fitness goals? As a PF member, you can take advantage of our free fitness training* or find your <br></br> motivation by reading real member experiences on Planet of Triumphs.</p>

        <p>It’s our goal to provide a clean, safe, welcoming environment for anyone who walks through our door, and all the equipment, amenities and support you need once <br></br> you’re here.</p>


        <h5>Welcome to Planet Fitness. The Judgement Free Zone®</h5>

        <p className=''>*Amenities and Perks subject to availability and restrictions. See home club for details.</p>
      </div>


      <div className='cintainer-fluid bg-light p-5'>
        <h2 className='text-center ms-4'>LEARN MORE ABOUT US</h2>
        <div className='row my-5'>

          <div className='col-md-3'></div>

          <div className='col-md-3 text-center mx-3'>
            <div className='card'>
              <h3 className='bg-danger text-light p-3'>WHY BB?</h3>
              <p>We create an environment where you can <br></br> relax, go at your
                own pace, and do your own <br></br> thing   without ever having to
                worry about being judged.</p>
            </div>
          </div>

          <div className='col-md-3 text-center'>
            <div className='card'>
              <h3 className='bg-danger text-light p-3'>The Best Value</h3>
              <p>We create an environment where you can <br></br> relax, go at your
                own pace, and do your own <br></br> thing   without ever having to
                worry about being judged.</p>
            </div>
          </div>

          <div className='col-md-3'></div>
        </div>



        <div className='row'>
          <div className='col-md-3'></div>

          <div className='col-md-3 text-center mx-3'>
            <div className='card'>
              <h3 className='bg-danger text-light p-3'>BB Fitness Training</h3>
              <p>Make the most of your fitness experience <br></br> with  our
                small group training sessions,<br></br> personalized exercise
                programs and certified trainers.</p>
            </div>
          </div>

          <div className='col-md-3 text-center'>
            <div className='card'>
              <h3 className='bg-danger text-light p-3'>BB Welcome Booklet</h3>
              <p>Make the most of your fitness experience <br></br> with  our
                small group training sessions,<br></br> personalized exercise
                programs and certified trainers.</p>
            </div>
          </div>

          <div className='col-md-3 '></div>
        </div>
      </div>



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
          <div className='col-sm-12'>
            <p>Copyright © 2020 - 2024 BodyBoost Fitness.</p>
          </div>
        </div>
      </div>

    </>
  );
};

export default About