import React from 'react'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDumbbell } from '@fortawesome/free-solid-svg-icons';
import './nav.css'

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-light fixed-top ">
                <div className="container">
                    <li className="navbar-brand text-dark me-5 ms-5">
                        <FontAwesomeIcon icon={faDumbbell} />BodyBoost<b>Fitness</b></li>

                    <div className="collapse  navbar-collapse " id="navbarNav">
                        <ul className="navbar-nav ">
                            <li className="nav-item mx-5 active aria-current='page' "><Link className="nav-link text-dark"  to="/home">Home</Link></li>

                            <li className="nav-item mx-5"><Link className="nav-link text-dark" to="/about">About</Link></li>

                            <li className="nav-item mx-5"><Link className="nav-link text-dark" to="/facility">Facilities</Link></li>

                            <li className="nav-item mx-5"><Link className="nav-link text-dark" to="/blog">Blog</Link></li>

                            <li className="nav-item mx-5"><Link className="nav-link text-dark" to="/contact">Contact</Link></li>

                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav;