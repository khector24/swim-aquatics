import React from 'react';
import "../pages-styles/home-sections.css/programs.css";

export default function Programs() {
    return (
        <div className="programs">
            <h2>Our Programs</h2>
            <p>Explore our wide range of swimming programs for children of all ages.</p>
            <div className="card-container">
                <div className="program-card">
                    <h4>Water Safety</h4>
                    <p>Learn essential water safety skills and techniques.</p>
                </div>
                <div className="program-card">
                    <h4>Beginner Swim</h4>
                    <p>Build confidence and basic swimming skills.</p>
                </div>
                <div className="program-card">
                    <h4>Advanced Swim</h4>
                    <p>Develop advanced swimming techniques and stamina.</p>
                </div>
            </div>
            <a href="/contact" className="contact-button">Contact Us</a>
        </div>
    );
}
