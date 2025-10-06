import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import './home.css';

// Import multiple images
import image1 from './../data/image/mine2.jpg';
import image2 from './../data/image/mines.jpg';


export const Myhome = () => {
  const images = [image1, image2]; // Add all images here
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage(prev => (prev + 1) % images.length);
    }, 4000); // Change every 4 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [images.length]);

  return (
    <>
      <section className="home" data-aos="fade-up">
        <div className="container2">
          <div className="text-section">
            <h3 data-aos="zoom-in-down">I AM <span className="name">Robel Hailu</span></h3>
            <h1 data-aos="zoom-in-down" data-aos-anchor-placement="top-center">
              <Typewriter
                options={{
                  strings: [
                    "Software Engineer",
                    "Full-Stack Engineer",
                    "UI/UX Designer",
                    "Mobile App Developer"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <button className="btn"><Link to="/contact">Contact Me</Link></button>
          </div>
          <div className="image-section">
            <img 
              data-aos="fade-up" 
              data-aos-anchor-placement="top-center" 
              src={images[currentImage]} 
              alt="Robel Hailu" 
            />
          </div>
        </div>
      </section>
      <div className="homeLs"></div>
    </>
  );
};
