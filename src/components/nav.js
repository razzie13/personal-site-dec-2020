import { Link } from "gatsby"
import React from "react"

const Navlinks = () => (
      <ul>
        <li><Link to="/">home</Link></li>
        <li><a href="/projects/">projects</a></li>
        <li><Link to="/aboutme/">about me</Link></li>
        <li><Link to="/contact/">contact</Link></li>
      </ul>
)
export default Navlinks