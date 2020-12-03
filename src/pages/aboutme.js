import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import AboutMeText from "../components/maintext-aboutme"

const AboutMePage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - About Me" />
    <section class="aboutme noh4" id="section-one">
        <AboutMeText />
    </section>
    
    <div>
      <Image />
    </div>
  </Layout>
)

export default AboutMePage