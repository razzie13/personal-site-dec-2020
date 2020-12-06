import React from "react"

import Layout from "../components/layout"
//import Image from "../components/image"
import SEO from "../components/seo"

import ContactText from "../components/maintext-contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - Contact" />
    <div className="contact">
      <section class="contact noh4" id="section-one">
          <ContactText />
          <div className="centre-section">
                  <div className="hero-area">
                      <div className="hero-text">
                          <p>Services I offer:</p>
                          <ul>
                              <li>Visual design of new websites for mobile, tablet, and desktop users</li>
                              <li>Creation of custom websites for small and medium sized businesses</li>
                              <li>Creation of written site copy and blog content</li>
                              <li>Optimizing written copy for search engines</li>
                          </ul>
                      </div>
                      <div className="hero-image">

                      </div>
                  </div>
                  
              </div>
      </section>
    </div>
    
    
    <div>
      
    </div>
  </Layout>
)

export default ContactPage