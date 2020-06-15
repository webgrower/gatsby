import React from "react";
import { Link } from "gatsby";

import Menu from '../Menu';

import Logo from '../../assets/inline/webgrower_logo.svg';
import styles from './header.module.css';

const Header = () => (
  <header className={styles.headerSticky}>
    <div className={styles.headerContent}>
      <Link
        className={styles.headerLink}
        to="/"
      >
        <Logo width="128" height="128" />
        <h6 className={styles.subheader}>Почти каждодневный журнал про веб-разработку</h6>
      </Link>
    </div>

    <Menu />
  </header>
)

export default Header
