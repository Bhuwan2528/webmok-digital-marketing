import React from 'react'
import './Header.css'
import logo from '../../assets/logo.png'
import { IoMdCall } from "react-icons/io";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoMdArrowDropright } from "react-icons/io";
import { IoStar } from "react-icons/io5";
import google from '../../assets/google.png'
import men from  '../../assets/men-image.png'
import women from  '../../assets/hero-side.png'

// ✅ react-scroll ka Link import karo (alias ke saath)
import { Link as ScrollLink } from 'react-scroll';

const Header = ({ openPopup }) => {
  return (
    <div className='header'>
        
        <div className="navbar">
            <img src={logo} alt="" className="logo" />
            <ul className="nav-links">
                <li><ScrollLink to="navbar" smooth={true} offset={-50} duration={800}>Home</ScrollLink></li>
                <li><ScrollLink to="container" smooth={true} offset={-25} duration={800}>About Us</ScrollLink></li>
                <li><ScrollLink to="courses" smooth={true} offset={0} duration={800}>Courses</ScrollLink></li>
                <li><ScrollLink to="team" smooth={true} offset={0} duration={800}>Team</ScrollLink></li>
                <li><ScrollLink to="testimonial" smooth={true} offset={0} duration={800}>Testimonials</ScrollLink></li>
                <li><ScrollLink to="form-section" smooth={true} offset={0} duration={800}>Contact Us</ScrollLink></li>
            </ul>
            <div className="nav-buttons">
                <button className='nav-contact'  onClick={() => {
                window.location.href = "tel:+918684031003"; // yahan apna number daalo
                }}><span><IoMdCall /></span>Let's Talk</button>
                <button onClick={openPopup} className="nav-btn">Enroll Now <span><FaArrowRightLong /></span></button>
            </div>
        </div>

        <div className="hero">
            <div className="hero-left">
                <h3>4 Months Online & Offline <br /><span>Digital Marketing Course</span></h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe consequatur, praesentium quae veritatis vero facilis minima placeat eum natus cumque magni error nisi quo tempore molestiae corporis. Nisi, quibusdam adipisci!</p>

                <div className="hero-buttons">
                    <button className="nav-btn hero-btn" onClick={openPopup}>Enroll Now <span><FaArrowRightLong /></span></button>
                    <button className="hero-video ">
                        <span><IoMdArrowDropright /></span>
                        <p>Watch Video</p>
                    </button>
                </div> 

                <div className="hero-stats">
                    <div className="box">
                        <img src={google} alt="" />
                        <div className="box-content">
                            <h4>Google Ratings</h4>
                            <h3><IoStar /><IoStar /><IoStar /><IoStar /><IoStar /></h3>
                        </div>
                    </div>
                    <div className="box box-default">
                        <div className="box-content">
                            <h4>Satisfied Students</h4>
                            <h3>25k+</h3>
                        </div>
                    </div>
                    <div className="box box-default">
                        <div className="box-content">
                            <h4>Highest Package</h4>
                            <h3>12 LPA</h3>
                        </div>
                    </div>
                </div>
            </div>

            <div className="hero-right">
                <div className="glow-circle"></div>
                <img className='men' src={women} alt="" />

                <div className="glass-card card1">
                    <h2>Learn From Experts 👨‍🏫</h2>
                    <p>Get trained by industry professionals with 7+ years of experience.</p>
                </div>

                <div className="glass-card card2">
                    <h2>Limited Seats ⏳</h2>
                    <p>Next batch starting soon! 2000+ students already placed successfully.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header
