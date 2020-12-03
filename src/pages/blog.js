import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

import BlogText from "../components/maintext-blog"

const BlogPage = () => (
  <Layout>
    <SEO title="Greg Rasmussen - Web Designer and Developer - Blog" />
    <section class="blog noh4" id="section-one">
        <BlogText />
    </section>
    
    <div>
      <Image />
    </div>
  </Layout>
)

export default BlogPage