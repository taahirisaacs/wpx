import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import logo from "./../images/wpx-logo.svg"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      alignItems: `center`,
      justifyContent: `space-between`,
    }}
  >
    <Link
      to="/"
    >
      <img
        alt="Gatsby logo"
        src={logo}
        className="h-[30px] m-0"
      />
    </Link>
    <span>
      Your secret WordPress expert.
    </span>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
