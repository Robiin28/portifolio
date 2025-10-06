import React from "react";
import { 
    Telegram, 
    Twitter,
    Instagram,
    LinkedIn, 
    YouTube 
} from "@mui/icons-material";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer>
      <div className="social-icons">
        <i data-aos="zoom-in">
          <a
            href="https://t.me/Robin1228a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Telegram />
          </a>
        </i>
        <i data-aos="zoom-in">
          <a
            href="https://www.linkedin.com/in/mr-robel-hailu-854143239/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedIn />
          </a>
        </i>
        <i data-aos="zoom-in">
          <a
            href="https://www.instagram.com/rob__ril?igsh=d3AycGR3amxjeDQ2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
        </i>
        <i data-aos="zoom-in">
          <YouTube />
        </i>
      </div>
      <p data-aos="zoom-in">All Right Reserved 2024</p>
    </footer>
  );
};
