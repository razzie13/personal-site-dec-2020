import { Link } from "gatsby"
import React from "react"

const Navlinks = () => (
      <ul>
        <li><Link to="/projects/">projects</Link></li>
        <li><Link to="/blog/">blog</Link></li>
        <li><Link to="/contact/">contact</Link></li>
        <li><Link to="/aboutme/">about me</Link></li>
      </ul>
)
export default Navlinks