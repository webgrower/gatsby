import React from 'react';
import { graphql } from 'gatsby';

import GithubEdit from '../components/GithubEdit';
import HeaderImage from 'gatsby-image';
import Layout from '../components/layout';
import Seo from "../components/seo";

const LinkPage = ({ data }) => {
  const { frontmatter, html } = data.page;

  const renderHeaderImage = () => {
    if (!frontmatter.headerImg) {
      return null;
    }

    const mediaStyles = {
      margin: '40px -225px'
    }

    return <HeaderImage style={mediaStyles} fluid={frontmatter.headerImg.childImageSharp.fluid} />
  }

  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <h1><a href={frontmatter.linkUrl}>{frontmatter.title}</a></h1>

        {renderHeaderImage()}

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
        headerImg {
          childImageSharp {
            fluid(maxWidth: 700) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default LinkPage;
