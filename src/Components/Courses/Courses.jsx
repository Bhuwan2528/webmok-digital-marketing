import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Courses.css";

import web1 from "../../assets/web2.avif";
import digital from "../../assets/digital.jpg";
import graphic from "../../assets/graphic-designer.avif";
import video from "../../assets/video.jpeg";
import business from "../../assets/business.jpeg";
import data from "../../assets/data-science.jpg";

gsap.registerPlugin(ScrollTrigger);

const cards = [
  { id: 1, img: web1, title: "Web Development" },
  { id: 2, img: digital, title: "Digital Marketing" },
  { id: 3, img: video, title: "Video Editing" },
  { id: 4, img: graphic, title: "Graphic Designing" },
  { id: 5, img: business, title: "Business Development" },
  { id: 6, img: data, title: "Data Science" },
];

const Courses = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    const isMobile = window.innerWidth <= 450; // mobile check

    // 🔹 1. Animate first 3 cards on section viewport
    gsap.fromTo(
      cardsRef.current.slice(0, 3),
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".courses",
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // 🔹 2. Animate each card
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: card,
            start: "top 90%",
            end: "top 60%",
            toggleActions: "play none none reverse",
            horizontal: !isMobile, // mobile me horizontal tracking off
            scroller: !isMobile ? ".course-slider" : undefined,
          },
          delay: index * 0.05,
        }
      );
    });
  }, []);

  return (
    <div className="courses">
      <h2>Our Courses</h2>

      <div className="course-slider">
        {cards.map((card, i) => (
          <div
            key={card.id}
            className="course-card"
            ref={(el) => (cardsRef.current[i] = el)}
          >
            <img src={card.img} alt={card.title} />
            <span className="title">{card.title}</span>
            <p>
              Learn the essentials of {card.title}. Get hands-on experience and
              build real-world skills that will boost your career.
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
