import React from "react"
import { Link } from "gatsby"

const BlogText = () => (
    <>
        <div className="centre-section">
            <h1>Blog</h1>
            <div className="hero-area">
                <div className="hero-text">
                    <p>I build websites for passionate entrepreneurs and avid hobbyists.</p>
                    <p>Are you interested in what I can do for you?</p>
                </div>
                <div className="hero-image">

                </div>
            </div>
            <h4><Link to="/blog/">read blog posts</Link></h4>
        </div>
    </>
)
export default BlogText