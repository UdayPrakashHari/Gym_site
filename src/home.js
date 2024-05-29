import React from 'react';
import './home.css';

function subscribe(){
    alert('You are successfully subscribed!!!')
}


const Home = () => {
    return (
        <>
            <div className='container-fluid text-light'>
                <div className='image-container'>
                    <img src='https://images.unsplash.com/photo-1605296867724-fa87a8ef53fd?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Home Background" />

                    <div className='overlayHome'>
                        <div className='contentHome'>
                            <p className='text-light my-3'>EXPERIENCE THE FITNESS</p>
                            <p className='text-light my-3'>EXPERIENCE THE FITNESS</p>
                            <p className='text-light my-3'>AT BENGALURU'S FRIENDLIEST GYM IN RR NAGAR!</p>
                            <h1>JOIN FITNESS GYM TODAY</h1>
                            <input placeholder='Get Subscribed' /> <button className='btn btn-danger text-light' onClick={subscribe}>Subscribe</button>
                            <p>TO THE FITNESS & WELLNESS COMMUNITY.</p>
                            <p>#20YEARS OF SERVICE</p>
                            <p>#HERETOSTAY</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container my-5'>
                <div className='row'>
                    <div className='col-md-6' id='sessionImg'>
                        <img className='rounded' src='https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt='Personal Training Session' />
                    </div>

                    <div className='col-md-6 text-center'><br></br><br></br>
                        <p>YOUR BODY & YOUR FITNESS REQUIREMENTS ARE UNIQUE.<br></br>YOUR PERSONAL TRAINING SHOULD REFLECT THAT!</p>
                        <h1>CERTIFIED PERSONAL</h1>
                        <h1>TRAINERS</h1>
                        <p>Get fit fast with Waves Gym’s certified personal trainers. Enjoy cardio,<br></br> strength, and weight training with top equipment. Join now and make <br></br> ‘Impossible’ ‘I’m Possible’!</p>
                        <button className='btn btn-danger text-light'>BOOK A FREE SESSION</button>
                    </div>
                </div>
            </div>


            <div className='container mt-3'>
                <h3 className='text-center'>MEMBERSHIPS</h3>
                <p className='text-center'>We offer the PF Black Card® Membership and Classic Membership. Both get you access to <br></br>The Judgement Free Zone®, and tons of cardio and strength equipment.</p>

                <div className='row'>
                    <div className='col-md-3'></div>

                    <div className='col-md-3 border rounded mx-2 text-light text-center' id='elite'>
                        <h4 className='my-2'>BB ELITE CARD®</h4>
                        <p>Starting at</p>
                        <h5 className='text-warning'>Rs. 770 / month</h5>
                        <p>Plus taxes and fees</p>
                        <p>Access to any club, bring a guest anytime, PF+
                            premium digital workouts, and so much more!</p><hr></hr>
                        <button className='btn btn-warning text-light my-2'>Learn More</button>
                    </div>

                    <div className='col-md-3 border rounded mx-2 text-center text-light' id='pro'>
                        <h4 className='my-2'>BB PRO CARD®</h4>
                        <p>Starting at</p>
                        <h5 className='text-dark'>Rs. 541 / month</h5>
                        <p>Plus taxes and fees</p>
                        <p>Our standard membership, premium digital workouts, with unlimited access
                            to your home club.</p><hr></hr>
                        <button className='btn btn-dark text-light my-1'>Learn More</button>
                    </div>

                    <div className='col-md-2'>

                    </div>
                </div>
            </div><br></br>


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
    );
};

export default Home;
