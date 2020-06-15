import React from 'react';
import styles from './footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerBox}>
      © {new Date().getFullYear()} Работает на
      {` `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
  )
}

export default Footer;
