import React from "react";
import { 
    Facebook, 
    Twitter,
    Instagram, 
    YouTube } from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <i data-aos="zoom-in">
          <Facebook />
        </i>
        <i data-aos="zoom-in">
          <Twitter />
        </i>
        <i data-aos="zoom-in">
          <Instagram />
        </i>
        <i data-aos="zoom-in">
          <YouTube />
        </i>
      </div>
      <p data-aos="zoom-in">All Right Reserved 2024</p>
    </footer>
  );
};
