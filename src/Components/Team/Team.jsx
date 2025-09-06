import React, { useEffect, useRef } from "react";
import "./Team.css";
import rahish from "../../assets/rahish.jpg";
import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Team = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const cards = sliderRef.current.children;
    gsap.fromTo(
      cards,
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.2, // 🔹 1 by 1 effect, 0.2s interval
        scrollTrigger: {
          trigger: sliderRef.current,
          start: "top 90%", // jaise hi viewport me aaye
          end: "bottom 60%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);

  const teamMembers = [
    { name: "Rahish Sangwan", role: "ADS & Analytics Expert", img: rahish },
    { name: "Rahish Sangwan", role: "ADS & Analytics Expert", img: rahish },
    { name: "Rahish Sangwan", role: "ADS & Analytics Expert", img: rahish },
  ];

  return (
    <div className="team">
      <h3>Our Team</h3>
      <p>
        Meet the people who drive our mission forward — Each member contributes
        their strengths and experiences, helping us innovate, adapt, and achieve
        our goals while staying true to our core values.
      </p>

      <div className="team-container">
        <div className="team-slider" ref={sliderRef}>
          {teamMembers.map((member, index) => (
            <div className="team-card" key={index}>
              <img src={member.img} alt={member.name} />
              <h2>{member.name}</h2>
              <h4>{member.role}</h4>
              <div className="social-icons">
                <span>
                  <FaInstagram />
                </span>
                <span>
                  <FaFacebookF />
                </span>
                <span>
                  <FaTwitter />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
        