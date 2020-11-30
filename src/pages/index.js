import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer" />
    <h1>Welcome</h1>
    <div>
      <p>I build websites for passionate entrepreneurs and avid hobbyists so they can focus on what they do best.</p>
      <p>Are you interested in what I can do for you?</p>
    </div>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    
    <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
  </Layout>
)

export default IndexPage
