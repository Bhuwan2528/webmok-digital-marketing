import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About.css";
import logo from '../../assets/logo.png'
import star from '../../assets/star.png'
import rahish from '../../assets/rahish.jpg'

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const line1 = useRef(null);
  const line2 = useRef(null);
  const line3 = useRef(null);

  useEffect(() => {
    // Mobile detection
    const isMobile = window.innerWidth < 768;

    // Start & end points set based on device
    const startPoint = isMobile ? "top 100%" : "top 100%";
    const endPoint = isMobile ? "bottom 60%" : "bottom 50%";

    gsap.to([line1.current, line2.current, line3.current], {
      backgroundPositionX: "0%",
      stagger: 0.5,
      ease: "none",
      scrollTrigger: {
        trigger: ".scroll-text",
        start: startPoint,
        end: endPoint,
        scrub: 2,
        // markers: true,
      },
    });
  }, []);

  return (
    <div id="container">
    <div className="container">

      <div className="headings">
        <div className="icon-img">
          <span className="about-logo"> <img src={rahish} alt="" /></span>
          <span className="about-logo main"> <img src={logo} alt="" /></span>
          <span className="about-logo"> <img src={rahish} alt="" /></span>
        </div>
        <h3>About Us</h3>
      </div>

      <img className="star" src={star} alt="" />

      <h1 className="scroll-text">
        <span ref={line1} className="scroll-highlight">
          A Leading Digital Marketing Training Agency for the Last 10 Years
        </span>
        <br />
        <span ref={line2} className="scroll-highlight">
          Focused on Real-Life Practical Training & Live Projects
        </span>
        <br />
        <span ref={line3} className="scroll-highlight">
          Tailored Just For You According To This Modern Era to Help You <br /> Become a High-Paying Marketer
        </span>
      </h1>

      <img className="star1" src={star} alt="" />

    </div>
    </div>
  );
};

export default About;
