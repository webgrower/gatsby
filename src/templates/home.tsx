import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Listing from '../components/Listing';

const HomePage = ({ data }) => {
  const { articles, links, page } = data;
  const { html } = page;

  return (
    <Layout>
        <Listing items={articles.edges} title="Статьи" />
        <Listing items={links.edges} title="Ссылки" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
    articles: allMarkdownRemark(
      filter: {
        frontmatter: {
          template: { eq: "article" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
    links: allMarkdownRemark(
      filter: {
        frontmatter: {
          template: { eq: "link" }
        }
      }
    ) {
      edges {
        node {
          frontmatter {
            path
            title
          }
        }
      }
    }
  }
`;

export default HomePage;
