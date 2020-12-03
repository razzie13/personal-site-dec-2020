import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import ContactText from "../components/maintext-contact"

const ContactPage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - Contact" />
    <section class="contact noh4" id="section-one">
        <ContactText />
    </section>
    
    <div>
      <Image />
    </div>
  </Layout>
)

export default ContactPage