import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBicycle, faCamera, faCoffee } from '@fortawesome/free-solid-svg-icons'

const AboutMeText = () => (
    <>
        <div className="centre-section">
            <h1>About Me</h1>
            <div className="hero-area">
                <div className="hero-text">
                    <p>I'm not only a Website Designer and Developer. I'm a focused problem solver with amazing attention to detail.</p>
                    <p>There's plenty more good stuff too.</p>
                </div>
                <div className="hero-image">
                    <FontAwesomeIcon icon={faCoffee} />
                    <FontAwesomeIcon icon={faBicycle} />
                    <FontAwesomeIcon icon={faCamera} />
                </div>
            </div>
            <h4><Link to="/aboutme/">read more about me</Link></h4>
        </div>
    </>
)
export default AboutMeText