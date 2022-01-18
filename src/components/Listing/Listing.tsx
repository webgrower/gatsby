import React from "react"
import classnames from "classnames"
import { Link } from "gatsby"
import LinkIcon from "../../assets/inline/link.svg"
import {
  listingIconLink,
  listingItem,
  listingItemPadding,
} from "./listing.module.css"

const Listing = ({ items, title }) => {
  if (!items || items.length < 1) {
    return null
  }

  const itemsList = items.map((item, index) => {
    const { linkUrl, path, title } = item.node.frontmatter

    const renderLinkUrl = () => {
      if (!linkUrl) {
        return null
      }

      return (
        <a href={linkUrl} className={listingIconLink}>
          <LinkIcon width="18" height="18" />
        </a>
      )
    }

    const listItemClass = classnames(listingItem, {
      [listingItemPadding]: linkUrl,
    })

    return (
      <p key={`list-item-${index}`} className={listItemClass}>
        {renderLinkUrl()}
        <Link to={path}>{title}</Link>
      </p>
    )
  })

  return (
    <div>
      <h1>{title}</h1>
      {itemsList}
    </div>
  )
}

export default Listing
