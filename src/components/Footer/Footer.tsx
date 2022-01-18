import React from "react"
import { footerBox } from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={footerBox}>
      © {new Date().getFullYear()} Работает на
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer
