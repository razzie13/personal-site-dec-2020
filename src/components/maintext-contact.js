import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAt, faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons"

const ContactText = () => (
    <>
        <div className="centre-section">
            <h1>Contact Me</h1>
            <div className="hero-area">
                <div className="hero-text">
                    <p>Need a Website refresh? Perhaps an entirely new one? Or your first?</p>
                    <p>I'll work with you to help make sure your site achieves your goals.</p>
                </div>
                <div className="hero-image">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <FontAwesomeIcon icon={faAt} />
                    <FontAwesomeIcon icon={faUser} />
                </div>
            </div>
            <h4><Link to="/contact/">click to connect</Link></h4>
        </div>
    </>
)
export default ContactText