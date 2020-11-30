import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import Navlinks from "./nav"

const Header = ({ siteTitle }) => (
  <header>
    <div>
      <h2>
        <Link to="/">{siteTitle}</Link>
      </h2>
      <Navlinks />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
