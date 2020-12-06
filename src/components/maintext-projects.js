import React from "react"
import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faNodeJs, faSass, faWordpress } from "@fortawesome/free-brands-svg-icons"


const ProjectsText = () => (
    <>
        <div className="centre-section">
            <h1>Projects</h1>
            <div className="hero-area">
                <div className="hero-text">
                    <p>I build modern responsive websites, and also develop for WordPress & Shopify.</p>
                    <p>The Project Portfolio is awaiting your click.</p>
                </div>
                <div className="hero-image">
                    <FontAwesomeIcon icon={faWordpress} />
                    <FontAwesomeIcon icon={faNodeJs} />
                    <FontAwesomeIcon icon={faSass} />
                </div>
            </div>
            <h4><Link to="/projects/">see more projects</Link></h4>
        </div>
    </>
)
export default ProjectsText