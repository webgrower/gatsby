import React from 'react';
import { graphql } from 'gatsby';

import GithubEdit from '../components/GithubEdit';
import HeaderImage from 'gatsby-image';
import Layout from '../components/layout';
import Seo from "../components/seo";

const ArticlePage = ({ data }) => {
  const { frontmatter, html } = data.page;

  const renderHeaderImage = () => {
    if (!frontmatter.headerImg) {
      return null;
    }

    const imageStyles = {
      margin: '40px -225px'
    }

    return <HeaderImage style={imageStyles} fluid={frontmatter.headerImg.childImageSharp.fluid} />
  }

  return (
    <Layout>
        <Seo title={frontmatter.title} />
        <h1>{frontmatter.title}</h1>

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

export default ArticlePage;
