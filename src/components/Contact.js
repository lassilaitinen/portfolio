import React from 'react';
import './Contact.css';

const Contact = () => {
    return (
        <div className="Contact">
            <div id="contact-container">
            <h1>Contact</h1>
            <p>
                You can find me on LinkedIn or GitHub.
                <br /><br />
                LinkedIn: <br />
                <a href="https://www.linkedin.com/in/lassi-laitinen-/" target="_blank" rel="noopener noreferrer" >linkedin.com/in/lassi-laitinen-/</a>
                <br /><br />
                GitHub: <br />
                <a href="https://github.com/lassilaitinen" target="_blank" rel="noopener noreferrer">github.com/lassilaitinen</a>
            </p>
            </div>
        </div>
        );
    }
    
export default Contact;