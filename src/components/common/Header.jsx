import React, { useState, useEffect } from "react";
import { Menu, Brightness4, Brightness7 } from "@mui/icons-material";
import './css/header.css';
import { Link } from "react-router-dom";

export const Header = () => {
    const [response, setResponse] = useState(false);
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add("dark-mode");
        } else {
            document.body.classList.remove("dark-mode");
        }
    }, [isDarkMode]);

    return (
        <>
            <header>
                <div className="container flexsb">
                    <div className={response ? "navHide" : "nav"}>
                        <Link to="/" onClick={() => setResponse(false)}>Home</Link>
                        <Link to="/about" onClick={() => setResponse(false)}>About</Link>
                        <Link to="/contact" onClick={() => setResponse(false)}>Contact</Link>
                        <Link to="/service" onClick={() => setResponse(false)}>Service</Link>
                        <Link to="/portfolio" onClick={() => setResponse(false)}>Portfolio</Link>
                        <Link to="/testimonials" onClick={() => setResponse(false)}>Blog</Link>
                        <Link to="/skill" onClick={() => setResponse(false)}>Skill</Link>
                    </div>
                    <div className="icon">
                        <button className="toggle" onClick={() => setResponse(!response)}>
                            <Menu className='icon' />
                        </button>
                       
                    </div>
                </div>
            </header>
        </>
    );
}
