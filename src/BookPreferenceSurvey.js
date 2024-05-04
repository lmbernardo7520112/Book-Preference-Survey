// BookPreferenceSurveyPage.js
import React, { useState } from 'react';
import FormfacadeEmbed from "@formfacade/embed-react";
import NavBarComponent from "./NavBarComponent";
import FooterComponent from "./FooterComponent";
import RecommendationsPage from "./RecommendationsPage"; // Import RecommendationsPage component

const BookPreferenceSurveyPage = () => {
    const [showRecommendations, setShowRecommendations] = useState(false);

    const handleSubmitForm = () => {
        setShowRecommendations(true);
    };

    return (
        <div className="d-flex flex-column min-vh-100 book-survey-bg">
            <NavBarComponent />
            <div className="container flex-grow-1">
                <div className="card">
                    <div className="card-header">
                        Book Preference Survey
                    </div>
                    <div className="card-body">
                        <FormfacadeEmbed
                            formFacadeURL="https://formfacade.com/include/102948066487293109034/form/1FAIpQLSehmuKpAtMYn-O2sGZTP9QEbxsnMUjsfkA3V948qrnpX521nw/classic.js/?div=ff-compose"
                            onSubmitForm={handleSubmitForm}
                        />
                    </div>
                </div>
                {showRecommendations && <RecommendationsPage />}
            </div>
            <FooterComponent />
        </div>
    );
};

export default BookPreferenceSurveyPage;



