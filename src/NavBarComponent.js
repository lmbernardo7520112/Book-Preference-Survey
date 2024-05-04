import React from 'react';

const NavBarComponent = () => {
    const iconPath = "/icon-book-preferences-survey.jpg"; // Path to the icon

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                {/* Icon in the Navbar with specific class */}
                <a className="navbar-brand" href="/">
                    <img src={iconPath} alt="Icon" className="navbar-icon smaller-icon" /> 
                </a>
                {/* Toggle button for smaller screens */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* Navbar items with the added class */}
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav justify-content-between">
                        {/* Section "About Us" */}
                        <li className="nav-item">
                            <a className="nav-link" href="#about-us">About Us</a>
                        </li>
                        {/* Section "Gamification" */}
                        <li className="nav-item">
                            <a className="nav-link" href="#gamification">Gamification</a>
                        </li>
                        {/* Section "Contact Us" */}
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavBarComponent;
