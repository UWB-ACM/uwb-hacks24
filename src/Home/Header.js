import React from 'react';
import './Home.css';
import { NavLink } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">UWB Hacks 2023</h1>
            <nav className="header-nav">
                <ul>
                    <NavLink to= "/uwb-hacks23/Registration"> Registration </NavLink>
                    <NavLink to= "mailto:acmuwbothell@gmail.com?subject=Hackathon"> Contact </NavLink>
                    <NavLink to= "/uwb-hacks23/FAQ"> FAQ </NavLink>
                </ul>
            </nav>
        </header>
    );
}

export default Header;