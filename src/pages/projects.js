import React from "react"
import Img from "gatsby-image"
import { graphql } from 'react-apollo'


import Layout from "../components/layout"
//import Image from "../components/image"  <Image />
import SEO from "../components/seo"

//import groceryStoreInsider from "../images/gsi.jpg"
import townMarket from "../images/townmarket-preview.jpg"
import amCustomCreations from "../images/a-m-custom-creations.jpg"
import personalSitev3Preview from "../images/personalsitepreview2.jpg"
import covidProject from "../images/covid19preview.jpg"
import storeProject from "../images/storeproject.jpg"

import ProjectsText from "../components/maintext-projects"

const ProjectsPage = ({data}) => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - Projects" />
    <div className="projects">
      <section className="projects noh4" id="section-one">
          <ProjectsText />
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                
                <Img fluid={data.groceryStoreInsider.childImageSharp.fluid} alt="Grocery Store Insider blog" />

              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={townMarket} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={amCustomCreations} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={personalSitev3Preview} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={covidProject} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>The Grocery Store Insider Blog</p>
                  <p>The Project Portfolio is awaiting your click.</p>
              </div>
              <div className="hero-image">
                <img src={storeProject} alt="Grocery Store Insider blog" />
              </div>
          </div>
        </div>
      </section>
    </div>
    
    <div>
      
    </div>
  </Layout>
)

export default ProjectsPage

export const query = graphql`
    query {
      groceryStoreInsider: file(relativePath: {eq: "gsi.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `