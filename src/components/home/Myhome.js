import React from "react";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import './home.css';
import image from './../data/image/mines.jpg';

export const Myhome = () => {
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
                    "UI/UX Designer",
                    "Mobile App Developer",
                    "Full-Stack Engineer"
                  ],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <button className="btn"><Link to="/contact">Contact Me</Link></button>
          </div>
          <div className="image-section">
            <img data-aos="fade-up" data-aos-anchor-placement="top-center" src={image} alt="Robel Hailu" />
          </div>
        </div>
      </section>
      <div className="homeLs"></div>
    </>
  );
};
