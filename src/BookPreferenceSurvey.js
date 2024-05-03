import React, { useState } from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";
import GoogleSheetsData from "./GoogleSheetsData"; // Importar componente para acessar os dados da planilha
//import Navbar from "./Navbar"; // Importar componente Navbar
//import Footer from "./Footer"; // Importar componente Footer

const Navbar = () => {
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



// Componente Footer
const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            {/* Conteúdo do Footer */}
        </footer>
    );
};

// Componente principal da página
const BookPreferenceSurveyPage = () => {
    const [showRecommendations, setShowRecommendations] = useState(false); // Estado para controlar a exibição das recomendações

    // Função para lidar com o envio do formulário
    const handleSubmitForm = () => {
        setShowRecommendations(true); // Mostrar recomendações após o envio do formulário
    };

    return (
        <div className="d-flex flex-column min-vh-100 book-survey-bg">
            {/* Navbar */}
            <Navbar />
            <div className="container flex-grow-1">
                <div className="card">
                    <div className="card-header">
                        Book Preference Survey
                    </div>
                    <div className="card-body">
                        {/* Formulário */}
                        <FormfacadeEmbed
                            formFacadeURL="https://formfacade.com/include/102948066487293109034/form/1FAIpQLSehmuKpAtMYn-O2sGZTP9QEbxsnMUjsfkA3V948qrnpX521nw/classic.js/?div=ff-compose"
                            onSubmitForm={handleSubmitForm} // Lidar com o envio do formulário
                        />
                    </div>
                </div>
                {/* Exibir recomendações após o envio do formulário */}
                {showRecommendations && <GoogleSheetsData />}
            </div>
            {/* Footer */}
            <Footer />
        </div>
    );
};

// Exportar componente principal
export default BookPreferenceSurveyPage;

