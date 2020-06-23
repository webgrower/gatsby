import React from 'react';
import { graphql } from 'gatsby';

import GithubEdit from '../components/GithubEdit';
import Layout from '../components/layout';
import Seo from "../components/seo";

const LinkPage = ({ data }) => {
  const { frontmatter, html } = data.page;

  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <h1><a href={frontmatter.linkUrl}>{frontmatter.title}</a></h1>
        <div dangerouslySetInnerHTML={{ __html: html }} />

        <GithubEdit url={frontmatter.path} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
    page: markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        path
        linkUrl
      }
    }
  }
`;

export default LinkPage;
