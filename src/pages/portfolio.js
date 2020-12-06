import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"


import Layout from "../components/layout"

import SEO from "../components/seo"

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
                  <p>As I was hunting for ideas for a project, I checked to see if the domain <a href="https://grocerystoreinsider.com">grocerystoreinsider.com</a> was available. To my surprise, not only was it available, it was affordable! I snapped it up and began mocking up the site in Adobe XD and choosing design elements while beginning to create blog content for the site itself.</p>
                  <h5>Read more about this project</h5>
                  <h5><a href="https://gregrasmussen.com/projects/2020/12/07/grocery-store-insider-blog/">Read more about this project</a></h5>
                  <h5><a href="https://grocerystoreinsider.com">Visit This Project</a></h5>
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
                  <p>Town Market - Integrated Grocery Store Data Platform</p>
                  <p>To be able to use the data from the database in a meaningful way, I chose to simulate a store website which populated its pages using the MongoDB Data.</p>
                  <h5><a href="https://gregrasmussen.com/projects/2020/10/16/store-system-introduction/">Read more about this project</a></h5>
                  <h5><a href="https://gregrasmussen.com/store-system">Visit This Project</a></h5>
              </div>
              <div className="hero-image">
              <Img fluid={data.townMarket.childImageSharp.fluid} alt="Town Market Website" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>A&M Custom Creations</p>
                  <p>Not too long ago, a longtime friend approached me knowing I’d been studying Web Development and asked me if I could help her launch her new Shopify store. Having had zero experience with Shopify, yet also wanting to be of assistance, and also being able to access and learn a new platform, I agreed, and began the design work and consultation for the Shopify page of A&M Custom Creations.</p>
                  <h5><a href="https://gregrasmussen.com/projects/2020/10/16/store-system-introduction/">Read more about this project</a></h5>
                  <h5><a href="https://amcustomcreations.net/">Visit This Project</a></h5>
              </div>
              <div className="hero-image">
                <Img fluid={data.amCustom.childImageSharp.fluid} alt="A&M Custom Creations Shopify Site" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>COVID-19 Data Finder</p>
                  <p>In April of 2020 – admittedly some of the earlier days of the current pandemic – I was eager to build my skills as a developer and incorporate an API into a new project. It hadn’t been my first time doing a project involving an API, but it was the first time where there would be no readily available tutorial on the subject of using this particular API for anything since the topic was so new at the time.</p>
                  <h5><a href="https://gregrasmussen.com/projects/2020/07/03/covid-19-data/">Read more about this project</a></h5>
                  <h5><a href="https://gregrasmussen.com/covid19">Visit This Project</a></h5>
              </div>
              <div className="hero-image">
                <Img fluid={data.covidProject.childImageSharp.fluid} alt="COVID-19 Data Finder" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>Personal Website Blog Theme</p>
                  <p>The Project Portfolio section of my site is it's own WordPress installation, created using a blank WordPress theme, and modified using the Advanced Custom Fields plugin, as well as Font Awesome for Advanced Custom Fields.</p>
                  <h5><a href="https://gregrasmussen.com/projects/2020/07/23/personal-website-wordpress-theme/">Read more about this project</a></h5>
                  <h5><a href="https://gregrasmussen.com/projects">Visit This Project</a></h5>
              </div>
              <div className="hero-image">
                <Img fluid={data.personalSite.childImageSharp.fluid} alt="Personal Website Blog Theme" />
              </div>
          </div>
        </div>
      </section>

      <section>
        <div className="centre-section">
          <div className="hero-area">
              <div className="hero-text">
                  <p>Grocery Store Shopping List Map App</p>
                  <p>When I was beginning to really sink my teeth into JavaScript, I resorted to watching tutorials and coded along with the videos as they were being presented. It's a great strategy when you’re learning, but not so great if you’d like to show prospective employers what you’re capable of. There are plenty of To-Do List videos on YouTube, but what if the To-Do list could do more?</p>
                  <h5><a href="https://gregrasmussen.com/projects/2020/07/27/shopping-list-integrated-store-navigation/">Read more about this project</a></h5>
                  <h5><a href="https://gregrasmussen.com/storeproject">Visit This Project</a></h5>
              </div>
              <div className="hero-image">
                <Img fluid={data.storeProject.childImageSharp.fluid} alt="Grocery Store Shopping List Map App" />
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
      townMarket: file(relativePath: {eq: "townmarket-preview.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      amCustom: file(relativePath: {eq: "a-m-custom-creations.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      personalSite: file(relativePath: {eq: "personalsitepreview2.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      covidProject: file(relativePath: {eq: "covid19preview.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      storeProject: file(relativePath: {eq: "storeproject.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 700) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `