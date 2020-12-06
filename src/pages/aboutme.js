import React from "react"

//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import AboutMeText from "../components/maintext-aboutme"

const AboutMePage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - About Me" />
    <div className="aboutme">
        <section class="aboutme noh4" id="section-one">
            <AboutMeText />       
            <div className="centre-section">
                <div className="hero-area">
                    <div className="hero-text">
                        <p>Some noteables include:</p>
                        <ul>
                            <li>Bicycled from Kitchener to New York City over two weeks in the Summer of 2013</li>
                            <li>Has a Christmas Tree with 5000 incansesant mini-lights</li>
                            <li>Built first website back in 2002</li>
                            <li>Lifelong Resident of Waterloo Region</li>
                        </ul>
                    </div>
                    <div className="hero-image">

                    </div>
                </div>
                
            </div>
        </section>
    </div>
    
  </Layout>
)

export default AboutMePage