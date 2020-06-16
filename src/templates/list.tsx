import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Listing from '../components/Listing';

const ListPage = ({ data }) => {
  const { items, page } = data;
  const { frontmatter, html } = page;

  return (
    <Layout>
        <Listing items={items.edges} title={frontmatter.title} />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!, $listingType: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
    items: allMarkdownRemark(
      filter: {
        frontmatter: {
          category: { eq: $listingType }
        }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
            linkUrl
          }
        }
      }
    }
  }
`;

export default ListPage;
