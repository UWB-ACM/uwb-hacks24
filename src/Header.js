import React from 'react';
import './App.css';

function Header() {
    return (
        <header className="header">
            <h1 className="header-title">UWB Hacks 2023</h1>
            <nav className="header-nav">
                <ul>
                    <li><a href="https://www.google.com/">Registration</a></li>
                    <li><a href="mailto:acmuwbothell@gmail.com?subject=Hackathon" target="_blank">Contact</a></li>
                    <li><a href="https://www.google.com/">FAQ</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;