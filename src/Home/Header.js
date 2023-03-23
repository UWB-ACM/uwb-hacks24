import React from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";

function Header() {
      
    return (
        <header className="header">
            <h1 className="header-title">UWB Hacks 2023</h1>
            <nav className="header-nav">
                <ul>
                    <NavLink to= "/uwb-hacks23"> Home </NavLink>
                    <NavLink to= "/uwb-hacks23/Registration"> Registration </NavLink>
                    <NavLink to= "mailto:acmuwbothell@gmail.com?subject=Hackathon"> Contact </NavLink>
                    <Link className= "header-nav a" 
                          to="faqSection" 
                          smooth={'easeInOutQuint'} 
                          ignoreCancelEvents={false} 
                          duration={200} delay={0} 
                          isDynamic={true} offset={-10} 
                          style={{cursor: 'pointer'}} >
                          FAQ
                    </Link>
                </ul>
            </nav>
        </header>
    );
}

export default Header;