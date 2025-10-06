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
                <h2 className='heading' data-aos='zoom-in-down'>
                    Services
                </h2>
                <Slider {...settings}>
                    <div className="box">
                        <i><Settings /></i>
                        <h2>UI/UX Design</h2>
                        <p>Designing intuitive and visually engaging interfaces for websites and apps.</p>
                    </div>
                    <div className="box">
                        <i><ViewInAr /></i>
                        <h2>Responsive Web Design</h2>
                        <p>Creating websites that look great on all devices and screen sizes.</p>
                    </div>
                    <div className="box">
                        <i><PieChart /></i>
                        <h2>Mobile App Development</h2>
                        <p>Building Android and iOS apps with a focus on performance and user experience.</p>
                    </div>
                    <div className="box">
                        <i><Code /></i>
                        <h2>Frontend Development</h2>
                        <p>Writing clean, interactive, and maintainable code for modern web applications.</p>
                    </div>
                    <div className="box">
                        <i><BarChart /></i>
                        <h2>Backend Development</h2>
                        <p>Developing robust and scalable server-side logic and APIs for web and mobile apps.</p>
                    </div>
                    <div className="box">
                        <i><CloudOutlined /></i>
                        <h2>Cloud & DevOps</h2>
                        <p>Deploying scalable applications and managing cloud infrastructure efficiently.</p>
                    </div>
                    <div className="box">
                        <i><Public /></i>
                        <h2>SEO & Optimization</h2>
                        <p>Optimizing websites for search engines to improve visibility and traffic.</p>
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
