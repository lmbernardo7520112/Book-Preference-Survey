import React from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
                <a className="navbar-brand" href="/">Book Preference Survey</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item">
                            <a className="nav-link" href="#quem-somos">Quem Somos?</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#gamificacao">Gamificação</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#contact-us">Contact Us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

const Footer = () => {
    return (
        <footer className="footer mt-auto py-3 bg-light">
            <div className="container">
                <span className="text-muted">© 2024 Book Preference Survey</span>
            </div>
        </footer>
    );
};

const BookPreferenceSurveyPage = () => {
    return (
        <div className="d-flex flex-column min-vh-100 book-survey-bg">
            <Navbar />
            <div className="container flex-grow-1">
                <div className="card">
                    <div className="card-header">
                        Book Preference Survey
                    </div>
                    <div className="card-body">
                        <FormfacadeEmbed
                            formFacadeURL="https://formfacade.com/include/102948066487293109034/form/1FAIpQLSehmuKpAtMYn-O2sGZTP9QEbxsnMUjsfkA3V948qrnpX521nw/classic.js/?div=ff-compose"
                            onSubmitForm={() => console.log('Form submitted')}
                        />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BookPreferenceSurveyPage;
