import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { Link } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDesktop, faMobileAlt, faTabletAlt } from '@fortawesome/free-solid-svg-icons'

import ProjectsText from "../components/maintext-projects"
import BlogText from "../components/maintext-blog"
import ContactText from "../components/maintext-contact"
import AboutMeText from "../components/maintext-aboutme"

const IndexPage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer" />
      <section className="welcome" id="section-one">
        <a></a>
        <div className="centre-section">
          <h1>Welcome</h1>
          <div className="hero-area">
            <div className="hero-text">
              <p>I build websites for passionate entrepreneurs and avid hobbyists so they can focus on what they do best.</p>
              <p>Are you interested in what I can do for you?</p>
            </div>
            <div className="hero-image">
              <FontAwesomeIcon icon={faMobileAlt} />
              <FontAwesomeIcon icon={faTabletAlt} />
              <FontAwesomeIcon icon={faDesktop} />
            </div>
          </div>
        </div>
          <div className="section-buttons">
            <Link className="link-button" to="#section-two">scroll down</Link>
            <Link className="link-button" to="#section-one">scroll up</Link>
          </div>
      </section>
      <section className="projects" id="section-two">
        <ProjectsText />
        <div className="section-buttons">
            <Link className="link-button" to="#section-three">scroll down</Link>
            <Link className="link-button" to="#section-one">scroll up</Link>
          </div>
      </section>
      <section className="blog" id="section-three">
        <BlogText />
          <div className="section-buttons">
            <Link className="link-button" to="#section-four">scroll down</Link>
            <Link className="link-button" to="#section-two">scroll up</Link>
          </div>
      </section>
      <section className="aboutme" id="section-four">
        <AboutMeText />  
          <div className="section-buttons">
            <Link className="link-button" to="#section-five">scroll down</Link>
            <Link className="link-button" to="#section-three">scroll up</Link>
          </div>
      </section>
      <section className="contact" id="section-five">
        <ContactText />
          <div className="section-buttons">
            <Link className="link-button" to="#section-five">scroll down</Link>
            <Link className="link-button" to="#section-four">scroll up</Link>
          </div> 
      </section>
  </Layout>
)

export default IndexPage
