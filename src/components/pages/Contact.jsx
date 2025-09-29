import React from "react";

import { 

    AddLocationAltOutlined, 
    PhoneIphone, 
    EmailOutlined
} from "@mui/icons-material";
import './css/contact.css'; // Ensure this is correctly imported

export const Contact = () => {
    return (
        <>
        <h2 className='heading ' data-aos='zoom-in-down'>
        Contact Me
        </h2>
        <div className="contact">
       
            <div className="container2">
            
                <div className="content">
                    <div className="left">
                        <div className="box" data-aos="zoom-in">
                            <i><AddLocationAltOutlined /></i>
                            <p>Ethiopia /Addis Ababa</p>
                            <p>Gofa</p>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <i><PhoneIphone /></i>
                            <p>+251-986-991447</p>
                            <p>Mon - Fri, 9am - 5pm</p>
                        </div>
                        <div className="box" data-aos="zoom-in">
                            <i><EmailOutlined /></i>
                            <p>robiiihailuu@gmail.com</p>
                            <p>i will reply within 24 hours</p>
                        </div>
                    </div>
                    <div className="right">
                        <form>
                            <div className="flex">
                                <input type="text" placeholder="Name" data-aos="flip-left" />
                                <input type="email" placeholder="Email" data-aos="flip-right" />
                            </div>
                            <input type="text" placeholder="Subject" data-aos="flip-up" />
                            <textarea placeholder="Message" rows="10" data-aos="flip-down"></textarea>
                            <button className="button" data-aos="zoom-in-up">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
        <div className="bot"></div>
</>       
    );
};
