import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Listing from '../components/Listing';
import Seo from '../components/seo';

const HomePage = ({ data }) => {
  const { articles, links, page } = data;
  const { html } = page;

  return (
    <Layout>
        <Seo type="main" />
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
      sort: { fields: [frontmatter___date], order: DESC }
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

export default HomePage;
