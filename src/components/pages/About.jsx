import React from "react";
import './css/about.css';

export const About = () => {

    const handleOpenCV = () => {
        const cvUrl = "https://drive.google.com/file/d/1rUN_Vqa8wblsRJRn1jWb2Hg62lM182Fz/view?usp=drive_link";
        window.open(cvUrl, "_blank"); // Opens CV in a new tab
    };

    return (
        <>
            <section className="about" data-aos="zoom-in-out">
                <div className="container flex">
                    <h2 className='heading' data-aos='zoom-in-down'>
                        About Me
                    </h2>
                    <h3 className="about-text" data-aos="zoom-in">
                        <span className="highlight">I am a dedicated Software Engineer</span> with a deep-seated love for crafting
                        elegant software solutions. My journey in the tech world began when I started learning software in university
                        and has been driven by a passion for designing intuitive and
                        visually captivating websites and applications.
                        <br /><br />
                        With a strong foundation in <span className="highlight"> Full-Stack development and APK development</span>,
                        I thrive on the challenges of creating seamless, user-friendly experiences.
                        <br /><br />
                        Beyond the code, I am passionate about the intersection of technology, design, and communication, believing that
                        <span className="highlight">creativity is the key to innovation.</span> Whether it's bringing a new concept
                        to life or enhancing an existing solution, I am always excited to push the boundaries of what's possible.
                    </h3>
                    <button className="btn Cv" data-aos="zoom-in" onClick={handleOpenCV}>
                        Download CV
                    </button>
                </div>
            </section>
        </>
    );
};
