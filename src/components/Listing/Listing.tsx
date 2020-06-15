import React from 'react';
import { Link } from 'gatsby';

const Listing = ({items, title}) => {
  if (!items || items.length < 1) {
    return null;
  }

  const itemsList = items.map((item, index) => {
    const { path, title } = item.node.frontmatter;

    return (
      <p key={`list-item-${index}`}>
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

export default Listing;
