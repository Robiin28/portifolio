import React from "react";
import Slider from "react-slick";
import Count from './Count';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { 
    Settings, 
    ViewInAr,
    PieChart, Code, BarChart, 
    CloudOutlined, Public,
    AddLocationAltOutlined
} from "@mui/icons-material";
import './css/service.css';

export const Service = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,     
        autoplaySpeed: 2000, 
    };

    return (
        <>
        <section className="service">
            <div className="container">
            <h2 className='heading ' data-aos='zoom-in-down'>
                        Services
                    </h2>
                <Slider {...settings}>
                    <div className="box">
                        <i><Settings /></i>
                        <h2>Creating UI/UX Design</h2>
                        <p>Crafting intuitive and engaging user interfaces with a focus on user experience.</p>
                    </div>
                    <div className="box">
                        <i><ViewInAr /></i>
                        <h2>Responsive Web Design</h2>
                        <p>Building websites that look and work great on all devices and screen sizes.</p>
                    </div>
                    <div className="box">
                        <i><PieChart /></i>
                        <h2>Creating Apps for Android and iOS</h2>
                        <p>Developing robust mobile applications tailored to your needs on both platforms.</p>
                    </div>
                    <div className="box">
                        <i><Code /></i>
                        <h2>Web Development</h2>
                        <p>Writing clean and maintainable code to build dynamic and interactive web applications.</p>
                    </div>
                    <div className="box">
                        <i><BarChart /></i>
                        <h2>Data Analysis</h2>
                        <p>Analyzing and visualizing data to drive informed decision-making processes.</p>
                    </div>
                    <div className="box">
                        <i><CloudOutlined /></i>
                        <h2>Cloud Services</h2>
                        <p>Implementing scalable cloud solutions to enhance your business operations.</p>
                    </div>
                    <div className="box">
                        <i><Public /></i>
                        <h2>SEO Optimization</h2>
                        <p>Optimizing your website to rank higher in search engine results and attract more visitors.</p>
                    </div>
                    <div className="box">
                        <i><AddLocationAltOutlined /></i>
                        <h2>Location-Based Services</h2>
                        <p>Integrating geo-location features to provide personalized user experiences.</p>
                    </div>
                </Slider>
            </div>
            
        </section>
        <div className="container dot">
           <div className="count">
                <Count className="counterService" />
            </div>
        </div>
        <div className="container">
            <div className="dot"></div>
        </div>
        </>
    );
};

export default Service;
