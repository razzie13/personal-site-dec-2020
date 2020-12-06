/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Header from "./header"
import "./main.css" // CUSTOM CSS
import { faFacebook, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"
import { faCopyright } from "@fortawesome/free-solid-svg-icons"
/*import "./layout.css"*/

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
        <footer>
          <div className="footer-inside">
            <h3><FontAwesomeIcon icon={faCopyright} /> 2020 Greg Rasmussen</h3>
            <div class="footer-icons">
              <a href="https://www.linkedin.com/in/gregrasmussen/"><FontAwesomeIcon icon={faLinkedin} aria-label="LinkedIn" /></a>
              <a href="https://www.instagram.com/razzie13/"><FontAwesomeIcon icon={faInstagram} aria-label="Instagram" /></a>
              <a href="https://www.facebook.com/gregoryrasmussen"><FontAwesomeIcon icon={faFacebook} aria-label="Facebook" /></a>
              
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
