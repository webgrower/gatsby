import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import Seo from "../components/seo";

const Page = ({ data }) => {
  const { frontmatter, html } = data.page;

  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>
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
  }
`;

export default Page;
