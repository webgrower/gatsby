import React from "react"
import { Link } from "gatsby"

import Menu from "../Menu"

import Logo from "../../assets/inline/webgrower_logo.svg"
import { headerContent, headerLink, subheader } from "./header.module.css"

const Header = () => (
  <header>
    <div className={headerContent}>
      <Link className={headerLink} to="/">
        <Logo width="128" height="128" />
        <h6 className={subheader}>
          Почти ежедневный журнал про веб-разработку
        </h6>
      </Link>
    </div>

    <Menu />
  </header>
)

export default Header
