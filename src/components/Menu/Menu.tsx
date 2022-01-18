import React from "react"
import { Link } from "gatsby"

import { menuItem, menuLink, menuLinkActive, menuRoot } from "./menu.module.css"

const menu = [
  {
    text: "Главная",
    url: "/",
  },
  {
    text: "Статьи",
    url: "/articles",
  },
  {
    text: "Ссылки",
    url: "/links",
  },
  {
    text: "Авторы",
    url: "/authors",
  },
  {
    text: "О проекте",
    url: "/about",
  },
]

const Menu = () => {
  const renderMenuItems = () => {
    return menu.map((item, index) => {
      return (
        <li className={menuItem} key={`menu-item-${index}`}>
          <Link
            className={menuLink}
            activeClassName={menuLinkActive}
            to={item.url}
          >
            {item.text}
          </Link>
        </li>
      )
    })
  }

  return (
    <nav>
      <ul className={menuRoot}>{renderMenuItems()}</ul>
    </nav>
  )
}

export default Menu
